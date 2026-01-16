import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dayjs from "dayjs";

import "dayjs/locale/fr";
import Image from "next/image";
import { ButtonMotion } from "@/components/motion";
import { ProjectCarousel } from "./carousel";
import { EmblaOptionsType } from "embla-carousel";
import ProjectNotFound from "./not-found";
import { Metadata } from "next";
import { getProjetBySlug } from "./data";
import { ProjetItemData } from "./types";
import ReactMarkdown from "react-markdown";
import { getAllProjets } from "../data";

dayjs.locale("fr");

const OPTIONS: EmblaOptionsType = { align: "center" };

export const dynamicParams = true;

export async function generateStaticParams() {
	try {
		const projets = await getAllProjets();

		if (!projets || projets.length === 0) {
			console.warn("Aucun projet trouvé lors de la génération statique");
			return [];
		}

		return projets.map((projet) => ({
			slug: projet.slug,
		}));
	} catch (error) {
		console.error("Erreur lors de la génération des paramètres statiques:", error);
		return [];
	}
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const projectData = await getProjetBySlug(slug);

	if (!projectData) {
		return {
			title: "Réalisation non trouvée | Websnooze",
			description: "La réalisation que vous recherchez n'existe pas.",
		};
	}

	const project: ProjetItemData = projectData;
	const title = `${project.title} | Websnooze`;
	const description = project.description;

	return {
		metadataBase: new URL("https://websnooze.xyz"),
		title: title,
		description: description,
		openGraph: {
			title: title,
			description: description,
			url: `https://websnooze.xyz/realisations/${slug}`,
			siteName: "Websnooze — Développeur React / Typescript",
			images: [{ url: project.header.url, width: 1200, height: 630 }],
			locale: "fr_FR",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: title,
			description: description,
			images: [project.header.url],
		},
		icons: {
			icon: "/favicon.ico",
		},
		alternates: {
			canonical: `https://websnooze.xyz/realisations/${slug}`,
		},
	};
}

const ProjectSlug = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	const projectData = await getProjetBySlug(slug);

	if (!projectData) {
		return <ProjectNotFound />;
	}

	const project: ProjetItemData = projectData;

	return (
		<section
			id="section"
			className="mx-auto flex flex-col sm:px-4 gap-8 max-w-5xl mt-20"
		>
			<div className="flex w-full items-center justify-between">
				<Link
					href="/realisations"
					className="text-default hover:text-content1-foreground flex items-center gap-2 p-1 transition-colors"
				>
					<ArrowLeft className="w-4 h-4" />
					<span className="text-sm">Retour aux réalisations</span>
				</Link>
				<div className="inline-flex w-fit min-w-fit items-center gap-2 border text-sm shadow transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-content3 text-default rounded-sm px-2 py-1">
					{dayjs(project.date).format("YYYY")}
				</div>
			</div>
			<header className="flex flex-col gap-8">
				<Image
					src={project.header.url}
					alt={`${project.title} - Image de couverture`}
					width={800}
					height={250}
					decoding="async"
					fetchPriority="high"
					className="bg-content1-foreground/20 h-fit w-full object-cover rounded-2xl"
				/>
				<div className="flex flex-col gap-4">
					<div className="flex flex-wrap justify-between gap-4 md:items-end">
						<h1 className="text-2xl font-bold">{project.title}</h1>
						<Link href={project.url} target="_blank">
							<ButtonMotion label="Voir la réalisation" type="button" />
						</Link>
					</div>
					<div className="flex gap-8 sm:flex-col sm:gap-4">
						<p className="text-default w-2/3 sm:w-full">
							{project.description}
						</p>
						<div className="flex flex-col gap-2">
							<div className="flex gap-2">
								<span className="text-default min-w-[60px] font-semibold">
									Rôle :
								</span>
								<p>{project.role}</p>
							</div>
							<div className="flex gap-2">
								<span className="text-default min-w-[60px] font-semibold">
									Client :
								</span>
								<p>{project.client}</p>
							</div>
						</div>
					</div>
				</div>
			</header>
			<ProjectCarousel
				title={project.title}
				gallery={
					project.gallery.map((image: { url: string }) => image.url) || []
				}
				options={OPTIONS}
			/>
			<div className="flex flex-col gap-6">
				<h2 className="text-2xl font-semibold font-display pb-2 border-b border-content1">
					Fonctionnalités
				</h2>
				<div className="text-default">
					<ReactMarkdown
						components={{
							ul: ({ children }) => (
								<ul className="list-disc ps-6 space-y-3.5 pl-4 text-base">
									{children}
								</ul>
							),
							li: ({ children }) => (
								<li className="text-default marker:text-content3 marker:ml-1 ps-1.5 marker:brightness-150">
									{children}
								</li>
							),
							p: ({ children }) => <p className="text-default">{children}</p>,
						}}
					>
						{project.features}
					</ReactMarkdown>
				</div>
			</div>
			<div className="h-px w-full bg-content3 brightness-125" />
			{project.frontend_technos.length > 0 && (
				<div className="flex flex-col gap-6">
					<h2 className="text-2xl font-semibold font-display pb-2 border-b border-content1">
						Technologies Frontend
					</h2>
					<ul className="list-disc ps-6 space-y-3.5 pl-4 text-default text-base">
						{project.frontend_technos.map(
							(techno: { name: string; link: string; description: string }) => (
								<li
									className="text-default marker:text-content3 marker:ml-1 ps-1.5 marker:brightness-150"
									key={techno.name}
								>
									<Link
										href={techno.link}
										target="_blank"
										className="text-content1-foreground underline font-semibold"
									>
										{techno.name}
									</Link>
									<span className="text-default"> - {techno.description}</span>
								</li>
							)
						)}
					</ul>
				</div>
			)}
			{project.backend_technos.length > 0 && (
				<div className="flex flex-col gap-6">
					<h2 className="text-2xl font-semibold font-display pb-2 border-b border-content1">
						Technologies Backend
					</h2>
					<ul className="list-disc ps-6 space-y-3.5 pl-4 text-default text-base">
						{project.backend_technos.map(
							(techno: { name: string; link: string; description: string }) => (
								<li
									className="text-default marker:text-content3 marker:ml-1 ps-1.5 marker:brightness-150"
									key={techno.name}
								>
									<Link
										href={techno.link}
										target="_blank"
										className="text-content1-foreground underline font-semibold"
									>
										{techno.name}
									</Link>
									<span className="text-default"> - {techno.description}</span>
								</li>
							)
						)}
					</ul>
				</div>
			)}
			{project.logiciel_technos.length > 0 && (
				<div className="flex flex-col gap-6">
					<h2 className="text-2xl font-semibold font-display pb-2 border-b border-content1">
						Technologies Logiciel
					</h2>
					<ul className="list-disc ps-6 space-y-3.5 pl-4 text-default text-base">
						{project.logiciel_technos.map(
							(techno: { name: string; link: string; description: string }) => (
								<li
									className="text-default marker:text-content3 marker:ml-1 ps-1.5 marker:brightness-150"
									key={techno.name}
								>
									<Link
										href={techno.link}
										target="_blank"
										className="text-content1-foreground underline font-semibold"
									>
										{techno.name}
									</Link>
									<span className="text-default"> - {techno.description}</span>
								</li>
							)
						)}
					</ul>
				</div>
			)}
		</section>
	);
};

export default ProjectSlug;
