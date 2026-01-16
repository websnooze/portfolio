import { Metadata } from "next";
import {
	AboutHero,
	AboutPilars,
	AboutSteps,
	AboutTechMarquee,
} from "./components";

export const metadata: Metadata = {
	metadataBase: new URL("https://websnooze.xyz"),
	title: "Compétences | Websnooze",
	description:
		"Développeur React / Typescript, Websnooze crée des sites modernes et durables, applications web et expériences digitales sur mesure.",
	openGraph: {
		title: "Compétences | Websnooze",
		description:
			"Développeur React / Typescript, Websnooze crée des sites modernes et durables, applications web et expériences digitales sur mesure.",
		url: "https://websnooze.xyz/competences",
		siteName: "Compétences | Websnooze",
		images: [{ url: "/og.jpg", width: 1200, height: 630 }],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Compétences | Websnooze",
		description:
			"Développeur React / Typescript, Websnooze crée des sites modernes et durables, applications web et expériences digitales sur mesure.",
		images: ["/twitter.jpg"],
	},
	icons: {
		icon: "/favicon.ico",
	},
	alternates: {
		canonical: "https://websnooze.xyz/competences",
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
