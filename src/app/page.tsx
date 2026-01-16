import { Metadata } from "next";

import {
	HomeHero,
	HomeMarquee,
	HomeAbout,
	HomeExpertise,
} from "@/components/home";

export const metadata: Metadata = {
	metadataBase: new URL("https://novata.fr"),
	title: "Novata — Agence web à Cahors",
	description:
		"Agence web indépendante à Cahors, Novata crée des sites modernes et durables, applications mobiles et expériences digitales sur mesure.",
	openGraph: {
		title: "Novata — Agence web à Cahors",
		description:
			"Agence web indépendante à Cahors, Novata crée des sites modernes et durables, applications mobiles et expériences digitales sur mesure.",
		url: "https://novata.fr",
		siteName: "Novata — Agence web à Cahors",
		images: [{ url: "/og.jpg", width: 1200, height: 630 }],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Novata — Agence web à Cahors",
		description:
			"Agence web indépendante à Cahors, Novata crée des sites modernes et durables, applications mobiles et expériences digitales sur mesure.",
		images: ["/twitter.jpg"],
	},
	icons: {
		icon: "/favicon.ico",
	},
	alternates: {
		canonical: "https://novata.fr",
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
