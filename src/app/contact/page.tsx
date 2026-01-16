import { Metadata } from "next";

import { ContactFaq, ContactHero } from "./components";
import { ReCaptchaProvider } from "@/providers";

export const metadata: Metadata = {
	metadataBase: new URL("https://novata.fr"),
	title: "Contact | Novata",
	description:
		"Contactez-nous pour vos projets web : Création de sites web, développement React, Node.js, UI/UX, applications sur mesure. Discutons de vos idées et créons ensemble !",
	openGraph: {
		title: "Contact | Novata",
		description:
			"Contactez-nous pour vos projets web : Création de sites web, développement React, Node.js, UI/UX, applications sur mesure. Discutons de vos idées et créons ensemble !",
		url: "https://novata.fr/contact",
		siteName: "Contact | Novata",
		images: [{ url: "/og.jpg", width: 1200, height: 630 }],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact | Novata",
		description:
			"Contactez-nous pour vos projets web : Création de sites web, développement React, Node.js, UI/UX, applications sur mesure. Discutons de vos idées et créons ensemble !",
		images: ["/twitter.jpg"],
	},
	icons: {
		icon: "/favicon.ico",
	},
	alternates: {
		canonical: "https://novata.fr/contact",
	},
};

const Contact = () => {
	return (
		<main className="flex flex-col gap-4 w-full mt-20">
			<ReCaptchaProvider>
				<ContactHero />
			</ReCaptchaProvider>
			<ContactFaq />
		</main>
	);
};

export default Contact;
