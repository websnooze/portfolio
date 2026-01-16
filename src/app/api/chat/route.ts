import { NextRequest, NextResponse } from "next/server";
import { PERSONAL_CONTEXT_JSON } from "../../../context";

// Configuration pour Mistral 7B via l'API Mistral AI
const API_KEY = "W7CeKsLI3bjNkzDxHqzUu440HGLI1VE5";
const API_URL = "https://api.mistral.ai/v1/chat/completions";
const MODEL_NAME = "open-mistral-7b"; // Modèle Mistral 7B spécifiquement

// Types pour l'API
interface ConversationMessage {
	role: "user" | "assistant";
	content: string;
}

interface APIMessage {
	role: "system" | "user" | "assistant";
	content: string;
}

const PERSONAL_CONTEXT = JSON.stringify(PERSONAL_CONTEXT_JSON);

export async function POST(request: NextRequest) {
	try {
		const { message, conversationHistory = [] } = await request.json();

		if (!message) {
			return NextResponse.json({ error: "Message requis" }, { status: 400 });
		}

		if (!API_KEY) {
			throw new Error(
				"Clé API Mistral non configurée. Veuillez configurer MISTRAL_API_KEY dans votre fichier .env.local"
			);
		}

		// Construction des messages pour l'API Mistral
		const messages: APIMessage[] = [
			{
				role: "system",
				content: PERSONAL_CONTEXT,
			},
			...conversationHistory.map((msg: ConversationMessage) => ({
				role: msg.role === "user" ? "user" : "assistant",
				content: msg.content,
			})),
			{
				role: "user",
				content: message,
			},
		];

		// Appel à l'API Mistral AI avec streaming
		const response = await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${API_KEY}`,
				Accept: "application/json",
			},
			body: JSON.stringify({
				model: MODEL_NAME,
				messages: messages,
				max_tokens: 1000,
				temperature: 0.7,
				top_p: 0.9,
				stream: true,
			}),
		});

		if (!response.ok) {
			const errorData = await response.text();
			throw new Error(`Erreur API Mistral: ${response.status} - ${errorData}`);
		}

		// Créer un stream de réponse
		const stream = new ReadableStream({
			async start(controller) {
				try {
					const reader = response.body?.getReader();
					if (!reader) {
						throw new Error("Impossible de lire le stream de réponse");
					}

					let buffer = "";

					while (true) {
						const { done, value } = await reader.read();

						if (done) break;

						// Convertir le chunk en texte
						const chunk = new TextDecoder().decode(value);
						buffer += chunk;

						// Traiter les lignes complètes
						const lines = buffer.split("\n");
						buffer = lines.pop() || ""; // Garder la dernière ligne incomplète

						for (const line of lines) {
							if (line.startsWith("data: ")) {
								const data = line.slice(6);

								if (data === "[DONE]") {
									controller.close();
									return;
								}

								try {
									const parsed = JSON.parse(data);
									const content = parsed.choices?.[0]?.delta?.content;

									if (content) {
										// Envoyer le chunk de contenu
										const chunkData = JSON.stringify({
											type: "content",
											content: content,
											model: MODEL_NAME,
											timestamp: new Date().toISOString(),
										});

										controller.enqueue(
											new TextEncoder().encode(`data: ${chunkData}\n\n`)
										);
									}
								} catch (e) {
									// Ignorer les erreurs de parsing
									console.error("Erreur dans le stream:", e);
								}
							}
						}
					}

					controller.close();
				} catch (error) {
					console.error("Erreur dans le stream:", error);
					controller.error(error);
				}
			},
		});

		// Retourner le stream avec les headers appropriés
		return new Response(stream, {
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "no-cache",
				Connection: "keep-alive",
			},
		});
	} catch (error) {
		console.error("Erreur dans l'API chat:", error);

		// Fallback en cas d'erreur
		const fallbackResponse = `Bonjour ! Je suis l'assistant commercial de Novata.

Désolé, je rencontre des difficultés techniques. Voici nos infos clés :

• Agence web à Cahors (sites, apps web & mobile)
• Technologies : React, Next.js, React Native
• Tarifs : Site vitrine à partir de 700€ | E-commerce à partir de 1500€ | App à partir de 2000€

Note : Je réponds uniquement aux questions sur l'agence Novata. Je ne traite pas de code ou de questions techniques.

Réessayez dans un instant ou contactez-nous directement !`;

		return NextResponse.json({
			response: fallbackResponse,
			model: "fallback",
			timestamp: new Date().toISOString(),
		});
	}
}
