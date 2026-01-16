import { Metadata } from "next";

import {
	HomeHero,
	HomeMarquee,
	HomeAbout,
	HomeExpertise,
} from "@/components/home";

export const metadata: Metadata = {
	metadataBase: new URL("https://websnooze.xyz"),
	title: "Websnooze — Développeur React / Typescript",
	description:
		"Développeur React / Typescript, Websnooze crée des sites modernes et durables, applications web et expériences digitales sur mesure.",
	openGraph: {
		title: "Websnooze — Développeur React / Typescript",
		description:
			"Développeur React / Typescript, Websnooze crée des sites modernes et durables, applications web et expériences digitales sur mesure.",
		url: "https://websnooze.xyz",
		siteName: "Websnooze — Développeur React / Typescript",
		images: [{ url: "/og.jpg", width: 1200, height: 630 }],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Websnooze — Développeur React / Typescript",
		description:
			"Développeur React / Typescript, Websnooze crée des sites modernes et durables, applications web et expériences digitales sur mesure.",
		images: ["/twitter.jpg"],
	},
	icons: {
		icon: "/favicon.ico",
	},
	alternates: {
		canonical: "https://websnooze.xyz",
	},
};

const Home = () => {
	return (
		<main className="flex flex-col gap-4 w-full mt-20">
			<HomeHero />
			<HomeMarquee />
			<HomeAbout />
			<HomeExpertise />
		</main>
	);
};

export default Home;
