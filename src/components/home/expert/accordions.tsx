"use client";

import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { ArrowBigUpDash, CodeXml, PencilRuler } from "lucide-react";
import Image from "next/image";
import { accordionsImages } from "@/components/data";
import clsx from "clsx";

const ExpertAccordions = () => {
	const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

	return (
		<div className="flex sm:flex-col lg:gap-6 sm:gap-4 items-start">
			<Accordion
				variant="splitted"
				className="w-full gap-4 px-0"
				selectedKeys={selectedKeys}
				onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
				defaultExpandedKeys={["1"]}
			>
				<AccordionItem
					key="1"
					aria-label="Développement"
					title={
						<div className="flex items-center gap-2.5 font-semibold">
							<CodeXml className="w-5 h-5" />
							<span>Développement Web & Mobile</span>
						</div>
					}
					classNames={{
						base: "bg-content2 shadow-none border border-content1",
						trigger: "cursor-pointer",
						content: "cursor-pointer py-0 pb-4 text-default",
						indicator: "-rotate-90 data-[open=true]:-rotate-270",
					}}
				>
					Création de sites web et applications réactives. Offrir aux
					utilisateurs une expérience enrichissante qui s&apos;adapte à tous les
					appareils et toutes les tailles d&apos;écran. Ainsi qu&apos;un back
					office robuste et sécurisé pour gérer vos données.
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label="Design"
					title={
						<div className="flex items-center gap-2.5 font-semibold">
							<PencilRuler className="w-5 h-5" />
							<span>UI/UX Design</span>
						</div>
					}
					classNames={{
						base: "bg-content2 shadow-none border border-content1",
						trigger: "cursor-pointer",
						content: "cursor-pointer py-0 pb-4 text-default",
						indicator: "-rotate-90 data-[open=true]:-rotate-270",
					}}
				>
					Un design qui respecte la charte graphique de votre marque. Pour une
					expérience utilisateur optimale.
				</AccordionItem>
				<AccordionItem
					key="3"
					aria-label="Optimisation"
					title={
						<div className="flex items-center gap-2.5 font-semibold">
							<ArrowBigUpDash className="w-5 h-5" />
							<span>SEO & Optimisation</span>
						</div>
					}
					classNames={{
						base: "bg-content2 shadow-none border border-content1",
						trigger: "cursor-pointer",
						content: "cursor-pointer py-0 pb-4 text-default",
						indicator: "-rotate-90 data-[open=true]:-rotate-270",
					}}
				>
					Une site web optimisé pour les moteurs de recherche. Pour une
					visibilité maximale.
				</AccordionItem>
			</Accordion>
			<div className="group relative aspect-video w-full max-w-xl flex-shrink-0 overflow-hidden rounded-3xl bg-content2">
				{selectedKeys.size === 1 ? (
					accordionsImages.map((image) => (
						<Image
							key={image.id}
							src={image.src}
							alt={image.alt}
							fill
							sizes="(min-width: 768px) 50vw, 100vw"
							priority
							className={clsx(
								"absolute left-0 top-0",
								"h-full w-full object-cover",
								"transition-all duration-500 group-hover:scale-[1.015]",
								selectedKeys.has(image.key) ? "opacity-100" : "opacity-0"
							)}
						/>
					))
				) : (
					<Image
						key={accordionsImages[0].id}
						src={accordionsImages[0].src}
						alt={accordionsImages[0].alt}
						fill
						sizes="(min-width: 768px) 50vw, 100vw"
						priority
						className={clsx(
							"absolute left-0 top-0",
							"h-full w-full object-cover",
							"transition-all duration-500 group-hover:scale-[1.015]"
						)}
					/>
				)}
			</div>
		</div>
	);
};

export default ExpertAccordions;
