import { RECAPTCHA_SECRET_KEY, STRAPI_TOKEN, STRAPI_URL } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

async function verifyRecaptcha(token: string): Promise<boolean> {
	if (!RECAPTCHA_SECRET_KEY) {
		console.error("⚠️ RECAPTCHA_SECRET_KEY n'est pas définie");
		return false;
	}

	try {
		const response = await fetch(
			"https://www.google.com/recaptcha/api/siteverify",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
			}
		);

		const data = await response.json();

		// Pour reCAPTCHA v3, vérifier le score (0.0 à 1.0)
		// Un score plus élevé = plus probablement un humain
		return data.success && data.score >= 0.5;
	} catch (error) {
		console.error("Erreur lors de la vérification reCAPTCHA:", error);
		return false;
	}
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, telephone, reason, message, recaptchaToken } = body;

		// Vérifier le token reCAPTCHA
		if (!recaptchaToken) {
			return NextResponse.json(
				{ error: "Token reCAPTCHA manquant" },
				{ status: 400 }
			);
		}

		const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);

		if (!isValidRecaptcha) {
			return NextResponse.json(
				{ error: "Échec de la vérification reCAPTCHA" },
				{ status: 403 }
			);
		}

		const [notifyAdmin, notifyCustomer] = await Promise.all([
			fetch(`${STRAPI_URL}/api/email-designer-v5/send`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${STRAPI_TOKEN}`,
				},
				body: JSON.stringify({
					to: "devsnooze@gmail.com",
					templateReferenceId: 1,
					data: {
						name,
						email,
						telephone,
						reason,
						message,
					},
				}),
			}),
			fetch(`${STRAPI_URL}/api/email-designer-v5/send`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${STRAPI_TOKEN}`,
				},
				body: JSON.stringify({
					to: email,
					templateReferenceId: 2,
					data: {
						name,
						email,
					},
				}),
			}),
		]);

		if (!notifyAdmin.ok) {
			throw new Error("Erreur critique : notification admin échouée");
		}

		if (!notifyCustomer.ok) {
			console.warn(
				"La notification client a échoué, mais la demande est enregistrée"
			);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Erreur API contact:", error);
		return NextResponse.json(
			{ error: "Impossible d'envoyer le message" },
			{ status: 500 }
		);
	}
}
