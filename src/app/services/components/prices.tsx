import { pricesData } from "@/components/data";
import { SectionTitle } from "@/components/modules";
import PriceCard from "./tarifs";

const AboutPrices = () => {
	return (
		<section id="section" className="container flex flex-col sm:gap-4 gap-12">
			<SectionTitle title="Tarifs" subtitle="Un tarif adapté à vos besoins" />
			<div className="grid grid-cols-3 sm:grid-cols-1 gap-4">
				{pricesData.map((item) => (
					<PriceCard key={item.id} item={item} />
				))}
			</div>
		</section>
	);
};

export default AboutPrices;
