import * as React from "react";
import {
	Tailwind,
	Html,
	Text,
	pixelBasedPreset,
	Body,
	Container,
	Head,
	Row,
	Font,
} from "@react-email/components";

interface ReceiverTemplateProps {
	name: string;
	reason?: string;
}

export function ReceiverTemplate({ name, reason }: ReceiverTemplateProps) {
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
								Websnooze<strong className="text-lime-500">.xyz</strong>
							</Text>
						</Row>
						<Row align="center" className="p-4 my-4 ">
							<Text className="text-xl font-bold mb-4 text-center">
								Bonjour <strong className="text-lime-500">{name}</strong> !
							</Text>
							<Text className="text-black text-center">
								Merci pour votre message{reason ? ` concernant: ${reason}` : ""}
								! Je vous répondrai dans les plus brefs délais.
							</Text>
							<Text className="text-black text-center mt-4">
								Si vous souhaitez me contacter directement, vous pouvez me
								envoyer un email à &nbsp;
								<strong className="text-lime-500">devsnooze@gmail.com</strong>
							</Text>
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

export default ReceiverTemplate;
