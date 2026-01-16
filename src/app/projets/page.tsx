import { Metadata } from "next";

import { ProjectPreview } from "./components";
import { SectionTitle } from "@/components/modules";
import { getAllProjets } from "./data";

export const metadata: Metadata = {
	metadataBase: new URL("https://novata.fr"),
	title: "Réalisations | Novata",
	description:
		"Découvrez nos réalisations web et applications : développement React, Node.js, UI design et solutions digitales innovantes alliant performance et créativité.",
	openGraph: {
		title: "Réalisations | Novata",
		description:
			"Découvrez nos réalisations web et applications : développement React, Node.js, UI design et solutions digitales innovantes alliant performance et créativité.",
		url: "https://novata.fr/realisations",
		siteName: "Réalisations | Novata",
		images: [{ url: "/og.jpg", width: 1200, height: 630 }],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Réalisations | Novata",
		description:
			"Découvrez nos réalisations web et applications : développement React, Node.js, UI design et solutions digitales innovantes alliant performance et créativité.",
		images: ["/twitter.jpg"],
	},
	icons: {
		icon: "/favicon.ico",
	},
	alternates: {
		canonical: "https://novata.fr/realisations",
	},
};

const Projects = async () => {
	const projets = await getAllProjets();

	return (
		<section id="section" className="container flex flex-col mt-20">
			<div className="w-2/3">
				<div className="hidden sm:block">
					<SectionTitle
						title="Mes projets"
						subtitle="Produits digitaux innovants"
					/>
				</div>
				<div className="sm:hidden">
					<SectionTitle
						title="Mes projets"
						subtitle="Créer des produits numériques de nouvelle génération"
					/>
				</div>
			</div>
			<div className="opacity-container py-8 grid sm:grid-cols-1 grid-rows-[masonry] sm:gap-y-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
				{projets.map((projet) => (
					<ProjectPreview
						key={projet.id}
						thumbnail={projet.thumbnail.url}
						title={projet.title}
						type={projet.role}
						date={projet.date}
						slug={projet.slug}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
