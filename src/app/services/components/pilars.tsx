import { pilarsData } from "@/components/data";
import { SectionTitle } from "@/components/modules";
import PilarCard from "./cards";

const AboutPilars = () => {
	return (
		<section id="section" className="container flex flex-col sm:gap-4 gap-12">
			<SectionTitle
				title="Expertises"
				subtitle="Notre expertise en quatre points"
			/>
			<div className="grid grid-cols-4 sm:grid-cols-1 gap-4">
				{pilarsData.map((item) => (
					<PilarCard key={item.id} item={item} />
				))}
			</div>
		</section>
	);
};

export default AboutPilars;
