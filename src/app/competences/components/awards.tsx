import { awardsData } from "@/components/data";
import { SectionTitle } from "@/components/modules";

const AboutAwards = () => {
	return (
		<section
			id="section"
			className="container flex sm:flex-col sm:gap-4 gap-20"
		>
			<SectionTitle title="Education" subtitle="Diplômes" />
			<div className="flex flex-col w-full">
				{awardsData.map((item) => (
					<div className="border-b border-content1 py-4" key={item.id}>
						<div className="flex flex-wrap sm:flex-col sm:items-start items-center justify-between gap-4">
							<h3 className="font-semibold">{item.title}</h3>
							<p className="text-sm uppercase text-default">{item.date}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default AboutAwards;
