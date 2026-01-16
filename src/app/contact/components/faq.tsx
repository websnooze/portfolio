"use client";

import { SectionTitle } from "@/components/modules";
import { Accordion, AccordionItem } from "@heroui/react";

const ContactFaq = () => {
	return (
		<section
			id="section"
			className="container lg:justify-between sm:flex-col gap-6 flex"
		>
			<SectionTitle title="FAQS" subtitle="Vous avez des questions ?" />
			<Accordion
				variant="splitted"
				defaultExpandedKeys={["1"]}
				className="w-3/4 sm:w-full gap-4 px-0"
			>
				<AccordionItem
					key="1"
					aria-label="Quels types de projets réalisez-tu ?"
					title={
						<div className="flex items-center sm:items-start gap-2.5 font-semibold">
							<span className="text-default">01.</span>
							<span className="sm:max-w-[220px]">
								Quels types de projets réalisez-tu ?
							</span>
						</div>
					}
					classNames={{
						base: "bg-content2 shadow-none border border-content1",
						trigger: "cursor-pointer sm:items-start",
						content: "cursor-pointer py-0 pb-4 text-default",
						indicator: "-rotate-90 data-[open=true]:-rotate-270 sm:mt-2",
					}}
				>
					Je conçois et développe des{" "}
					<strong>sites web vitrines, e-commerce et applications web.</strong>{" "}
					Je prends également en charge le <strong>design UI/UX</strong>, la{" "}
					<strong>maintenance</strong> et l’
					<strong>optimisation de performances</strong>.
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label="Combien coûte un site ou une application ?"
					title={
						<div className="flex items-center sm:items-start gap-2.5 font-semibold">
							<span className="text-default">02.</span>
							<span className="sm:max-w-[220px]">
								Combien coûte un site ou une application ?
							</span>
						</div>
					}
					classNames={{
						base: "bg-content2 shadow-none border border-content1",
						trigger: "cursor-pointer sm:items-start",
						content: "cursor-pointer py-0 pb-4 text-default",
						indicator: "-rotate-90 data-[open=true]:-rotate-270 sm:mt-2",
					}}
				>
					Chaque projet est unique. Le tarif dépend de la{" "}
					<strong>complexité</strong>, des
					<strong>fonctionnalités</strong> et du{" "}
					<strong>niveau de personnalisation</strong> souhaité. Lors d’un
					premier échange, nous établissons ensemble un{" "}
					<strong>devis clair et détaillé</strong>.
				</AccordionItem>
				<AccordionItem
					key="3"
					aria-label="Quels sont les délais moyens de réalisation ?"
					title={
						<div className="flex items-center sm:items-start gap-2.5 font-semibold">
							<span className="text-default">03.</span>
							<span className="sm:max-w-[220px]">
								Quels sont les délais moyens de réalisation ?
							</span>
						</div>
					}
					classNames={{
						base: "bg-content2 shadow-none border border-content1",
						trigger: "cursor-pointer sm:items-start",
						content: "cursor-pointer py-0 pb-4 text-default",
						indicator: "-rotate-90 data-[open=true]:-rotate-270 sm:mt-2",
					}}
				>
					Un <strong>site vitrine simple</strong> peut être prêt en{" "}
					<strong>1 à 2 semaines</strong>, tandis qu’un
					<strong>projet complet</strong> (site e-commerce, application, espace
					client, etc.) nécessite <strong>3 à 6 semaines</strong> selon les
					besoins.
				</AccordionItem>
				<AccordionItem
					key="4"
					aria-label="Proposez-vous un accompagnement après la mise en ligne ?"
					title={
						<div className="flex items-center sm:items-start gap-2.5 font-semibold">
							<span className="text-default">04.</span>
							<span className="sm:max-w-[220px]">
								Proposez-vous un accompagnement après la mise en ligne ?
							</span>
						</div>
					}
					classNames={{
						base: "bg-content2 shadow-none border border-content1",
						trigger: "cursor-pointer sm:items-start",
						content: "cursor-pointer py-0 pb-4 text-default",
						indicator: "-rotate-90 data-[open=true]:-rotate-270 sm:mt-2",
					}}
				>
					Oui, nous assurons un <strong>suivi continu</strong> : maintenance,
					mises à jour, hébergement, sécurité et évolutions futures de votre
					projet.
				</AccordionItem>
				<AccordionItem
					key="5"
					aria-label="Travaillez-vous uniquement avec des entreprises locales ?"
					title={
						<div className="flex items-center sm:items-start gap-2.5 font-semibold">
							<span className="text-default">05.</span>
							<span className="sm:max-w-[220px]">
								Travaillez-vous uniquement avec des entreprises locales ?
							</span>
						</div>
					}
					classNames={{
						base: "bg-content2 shadow-none border border-content1",
						trigger: "cursor-pointer sm:items-start",
						content: "cursor-pointer py-0 pb-4 text-default",
						indicator: "-rotate-90 data-[open=true]:-rotate-270 sm:mt-2",
					}}
				>
					Non — bien que basés à <strong>Cahors</strong>, nous collaborons avec
					des <strong>clients dans toute la France</strong> et à l’étranger, à
					distance ou sur place selon les besoins.
				</AccordionItem>
			</Accordion>
		</section>
	);
};

export default ContactFaq;
