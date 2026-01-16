import SectionTitle from "@/components/modules/section-title";
import { XPAccordion } from "./xp";

const AboutExperience = () => {
	return (
		<section
			id="section"
			className="container flex sm:flex-col sm:gap-4 gap-12"
		>
			<SectionTitle title="Missions" subtitle="Expériences">
				<p className="text-default text-balance">
					J&apos;ai travaillé avec des entreprises innovantes pour aider à créer
					des produits de haute qualité.
				</p>
			</SectionTitle>
			<XPAccordion />
		</section>
	);
};

export default AboutExperience;
