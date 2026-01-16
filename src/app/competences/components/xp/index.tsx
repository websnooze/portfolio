"use client";

import { Accordion, AccordionItem, Link } from "@heroui/react";
import Image from "next/image";

const TitleBlock = ({
	image,
	title,
	link,
	hashtag,
}: {
	image: string;
	title: string;
	link: string;
	hashtag: string;
}) => {
	return (
		<div className="flex items-center gap-4 font-semibold">
			<Image
				src={`/images/jobs/${image}.png`}
				alt={hashtag}
				width={40}
				height={40}
				className="w-10 h-10 object-contain rounded-full"
			/>
			<div className="flex flex-col">
				<span>{title}</span>
				<Link
					underline="hover"
					className="text-default text-sm w-fit"
					href={link}
					target="_blank"
				>
					{hashtag}
				</Link>
			</div>
		</div>
	);
};

export const XPAccordion = () => {
	return (
		<Accordion variant="splitted" className="w-full gap-4 px-0">
			<AccordionItem
				key="1"
				aria-label="Bulle vgtale"
				title={
					<TitleBlock
						image="bulle"
						title="Développement Fullstack"
						link="https://bulle-vgtale.com"
						hashtag="@bullevgtale"
					/>
				}
				classNames={{
					base: "bg-background rounded-none px-0 shadow-none border-b border-content1",
					trigger: "cursor-pointer",
					content: "cursor-pointer py-0 pb-4 text-default",
					indicator: "-rotate-90 data-[open=true]:-rotate-270",
				}}
			>
				<ul className="list-disc space-y-2 pl-4 text-sm">
					<li>
						Conception et design du site web, sur une approche{" "}
						<span className="font-semibold text-primary">SSR</span>.
					</li>
					<li>
						Developpement du backend{" "}
						<span className="font-semibold text-primary">RESTFULL</span> avec{" "}
						<span className="font-semibold text-primary">Bun</span> et{" "}
						<span className="font-semibold text-primary">Hono</span>, pour une
						approche moderne et robuste. Base de donnée{" "}
						<span className="font-semibold text-primary">MySQL</span>.
					</li>
					<li>
						Conception et design d&apos;un{" "}
						<span className="font-semibold text-primary">logiciel </span>de
						gestion des commandes, des clients et des paiments avec{" "}
						<span className="font-semibold text-primary">Tauri 2.0</span> et{" "}
						<span className="font-semibold text-primary">React</span> combiné à
						une logique locale avec syncronisation périodique à la base de
						donnée.
					</li>
				</ul>
			</AccordionItem>
			<AccordionItem
				key="2"
				aria-label="CS2IDEAS.COM"
				title={
					<TitleBlock
						image="ideas"
						title="Consultant & Développement Fullstack"
						link="https://github.com/CS2IDEAS"
						hashtag="@cs2ideas"
					/>
				}
				classNames={{
					base: "bg-background rounded-none px-0 shadow-none border-b border-content1",
					trigger: "cursor-pointer",
					content: "cursor-pointer py-0 pb-4 text-default",
					indicator: "-rotate-90 data-[open=true]:-rotate-270",
				}}
			>
				<ul className="list-disc space-y-2 pl-4 text-sm">
					<li>
						Conception et design du site web, avec une approche{" "}
						<span className="font-semibold text-primary">Gaming</span>, orienté
						Realtime, Statistiques joueurs et Magasin interactif. Développé avec
						React, Vite, Tailwind, HeroUI, Websockets natifs
					</li>
					<li>
						Developpement du backend{" "}
						<span className="font-semibold text-primary">RESTFULL</span> avec{" "}
						<span className="font-semibold text-primary">Node.js</span> et{" "}
						<span className="font-semibold text-primary">Express</span>, pour
						une solution qui a fait ses preuves. Gestion cache{" "}
						<span className="font-semibold text-primary">Redis</span> et{" "}
						<span className="font-semibold text-primary">Websockets</span>
						natifs. Base de donnée{" "}
						<span className="font-semibold text-primary">MySQL</span>.
					</li>
					<li>
						Conception d&apos;un{" "}
						<span className="font-semibold text-primary">
							Dashboard administrateur
						</span>{" "}
						permettant de gérer les serveurs de jeu{" "}
						<span className="font-semibold text-primary">CS2</span> ainsi que le
						site et Discord via des webhooks et une API{" "}
						<span className="font-semibold text-primary">RESTFULL</span>.
					</li>
				</ul>
			</AccordionItem>
			<AccordionItem
				key="3"
				aria-label="Spown.dev"
				title={
					<TitleBlock
						image="spown"
						title="Fondateur & Développement Fullstack"
						link="https://github.com/Spown-dev"
						hashtag="@spowndev"
					/>
				}
				classNames={{
					base: "bg-background rounded-none px-0 shadow-none border-b border-content1",
					trigger: "cursor-pointer",
					content: "cursor-pointer py-0 pb-4 text-default",
					indicator: "-rotate-90 data-[open=true]:-rotate-270",
				}}
			>
				<ul className="list-disc space-y-2 pl-4 text-sm">
					<li>
						Conception et design du moteur du CMS, avec une approche{" "}
						<span className="font-semibold text-primary">Modulaire</span> et
						sophistiqué, grâce à une gestion robuste de{" "}
						<span className="font-semibold text-primary">
							Webpack Module Federation
						</span>{" "}
						en Post Build. Ainsi qu&apos;un &quot;Page builder custom&quot;,la
						gestion du theme customisable, d&apos;ajout de module &quot;à chaque
						page&quot; et de la gestion des permissions.
					</li>
					<li>
						Developpement de quelques modules{" "}
						<span className="font-semibold text-primary">Backend</span> avec{" "}
						<span className="font-semibold text-primary">PHP</span> vanilla en
						approche modulaire.
					</li>
					<li>
						Conception d&apos;un{" "}
						<span className="font-semibold text-primary">Design System</span>{" "}
						inspiré de{" "}
						<span className="font-semibold text-primary">HeroUI</span>,
						permettant aux developpeurs de modules, de rester cohérents avec le
						coeur du CMS.
					</li>
					<li>
						Création d&apos;un{" "}
						<span className="font-semibold text-primary">CLI</span> permettant
						de générer des modules avec une template de base.
					</li>
					<li>
						Création d&apos;un système de{" "}
						<span className="font-semibold text-primary">licence</span> pour les
						modules via occultation du code et requêtes périodiques à la base de
						donnée.
					</li>
				</ul>
			</AccordionItem>
		</Accordion>
	);
};

export default XPAccordion;
