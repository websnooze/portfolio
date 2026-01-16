import * as React from "react";
import {
	Html,
	Text,
	Tailwind,
	pixelBasedPreset,
	Body,
	Container,
	Row,
	Head,
	Font,
} from "@react-email/components";

interface SenderTemplateProps {
	name: string;
	email: string;
	message: string;
	reason?: string;
}

export function SenderTemplate({
	name,
	email,
	message,
	reason,
}: SenderTemplateProps) {
	return (
		<Html lang="fr">
			<Tailwind
				config={{
					presets: [pixelBasedPreset],
				}}
			>
				<Head>
					<Font
						fontFamily="Montserrat"
						fallbackFontFamily="Verdana"
						webFont={{
							url: "https://fonts.gstatic.com/s/montserrat/v30/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2",
							format: "woff2",
						}}
						fontWeight={400}
						fontStyle="normal"
					/>
					<Font
						fontFamily="Montserrat"
						fallbackFontFamily="Verdana"
						webFont={{
							url: "https://fonts.gstatic.com/s/montserrat/v30/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA.woff2",
							format: "woff2",
						}}
						fontWeight={400}
						fontStyle="italic"
					/>
				</Head>
				<Body className="font-sans">
					<Container className="bg-slate-200 border border-slate-400 rounded-xl">
						<Row align="center" className="p-4 h-20 mb-4">
							<Text className="text-2xl font-bold text-center">
								Nova<strong className="text-lime-500">t</strong>a.fr
							</Text>
						</Row>
						<Row align="left" className="p-4 my-4 rounded-md">
							<Text className="text-xl font-bold mb-4">
								Nouveau message de{" "}
								<strong className="text-lime-500">{name}</strong>
							</Text>
							<Text className="text-black">
								{email}, c&apos;est son addresse email.
							</Text>
							{reason && (
								<Text className="text-black">
									Raison du contact: <strong>{reason}</strong>
								</Text>
							)}
							<Text className="text-black">Voici son message:</Text>
							<Row align="left" className="bg-slate-100 p-4 my-4 rounded-md">
								<Text className="text-gray-950 italic">{message}</Text>
							</Row>
						</Row>
						<Row align="center" className="bg-slate-300 p-4 h-20">
							<Text className="text-black">
								Ne répondez pas à ce message. Ceci est un message automatisé !
							</Text>
						</Row>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}

export default SenderTemplate;
