import { Metadata } from "next";
import {
	AboutHero,
	AboutPilars,
	AboutSteps,
	AboutTechMarquee,
} from "./components";

export const metadata: Metadata = {
	metadataBase: new URL("https://novata.fr"),
	title: "Services | Novata",
	description:
		"Création de sites web modernes, applications mobiles React Native, UI/UX design et optimisations. Solutions sur mesure pour votre présence digitale.",
	openGraph: {
		title: "Services | Novata",
		description:
			"Création de sites web modernes, applications mobiles React Native, UI/UX design et optimisations. Solutions sur mesure pour votre présence digitale.",
		url: "https://novata.fr/services",
		siteName: "Services | Novata",
		images: [{ url: "/og.jpg", width: 1200, height: 630 }],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Services | Novata",
		description:
			"Création de sites web modernes, applications mobiles React Native, UI/UX design et optimisations. Solutions sur mesure pour votre présence digitale.",
		images: ["/twitter.jpg"],
	},
	icons: {
		icon: "/favicon.ico",
	},
	alternates: {
		canonical: "https://novata.fr/services",
	},
};

const Services = () => {
	return (
		<main className="flex flex-col gap-4 w-full mt-20">
			<AboutHero />
			<AboutTechMarquee />
			<AboutPilars />
			<AboutSteps />
		</main>
	);
};

export default Services;
