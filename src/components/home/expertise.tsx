import { ExpertAccordions, TechMarquee } from "./expert";
import { SectionTitle } from "@/components/modules";

const HomeExpertise = () => {
	return (
		<section id="section" className="container flex flex-col">
			<SectionTitle title="Spécialités" subtitle="Domaines d'expertise" />
			<ExpertAccordions />
			<TechMarquee />
		</section>
	);
};

export default HomeExpertise;
