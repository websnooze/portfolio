"use client";

import { stepsData } from "@/components/data";
import { SectionTitle } from "@/components/modules";
import { EmblaOptionsType } from "embla-carousel";
import { StepsCarousel } from "./carousel";

const OPTIONS: EmblaOptionsType = { align: "start" };

const AboutSteps = () => {
	return (
		<section id="section" className="container flex flex-col">
			<SectionTitle title="Nos étapes" subtitle="Notre processus de conception">
				<p className="text-default text-balance">
					Pour nous, il n&apos;existe pas de petit projet : chacun mérite
					d&apos;être réalisé comme un produit haut de gamme.
				</p>
			</SectionTitle>
			<StepsCarousel slides={stepsData} options={OPTIONS} />
		</section>
	);
};

export default AboutSteps;
