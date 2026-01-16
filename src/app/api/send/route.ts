import { Resend } from "resend";
import { NextRequest } from "next/server";
import { SenderTemplate } from "../../../templates/sender";
import { ReceiverTemplate } from "../../../templates/receiver";
import { createElement } from "react";

const resend = new Resend("re_59G8xLGY_Lid64nR5mY9mGdzoj2o6Riw3");

const senderEmail = "noreply@notifications.novata.fr";
const receiverEmail = "contact@novata.fr";

export async function POST(request: NextRequest) {
	const body = await request.json();
	const { name, email, message, reason } = body;

	if (!body.name || !body.email || !body.message) {
		return Response.json({ error: "Missing required fields" }, { status: 400 });
	}

	try {
		const { data, error } = await resend.emails.send({
			from: "Novata <" + senderEmail + ">",
			to: [receiverEmail],
			subject: "Nouveau message de " + name,
			react: createElement(SenderTemplate, { name, email, message, reason }),
		});

		const { data: receiverData, error: receiverError } =
			await resend.emails.send({
				from: "Novata <" + senderEmail + ">",
				to: [email],
				subject: name + ", votre message a été envoyé",
				react: createElement(ReceiverTemplate, { name, reason }),
			});

		if (error || receiverError) {
			console.error("Resend error:", { error, receiverError });
			return Response.json({ 
				error: error?.message || error || "Erreur lors de l'envoi de l'email",
				receiverError: receiverError?.message || receiverError 
			}, { status: 500 });
		}

		return Response.json({ data, receiverData });
	} catch (error) {
		console.error("API Route error:", error);
		return Response.json({ 
			error: error instanceof Error ? error.message : "Erreur serveur inconnue" 
		}, { status: 500 });
	}
}
