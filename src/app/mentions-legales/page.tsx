import { mentionsLegalesData } from "@/components/data";
import { SectionTitle } from "@/components/modules";
import Link from "next/link";

const MentionsLegales = () => {
	const data = mentionsLegalesData;

	return (
		<section
			id="section"
			className="mx-auto flex flex-col sm:px-4 gap-8 max-w-5xl mt-20"
		>
			<SectionTitle title="mentions" subtitle="Mentions légales" />
			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-semibold font-display pb-2 border-b border-default/15">
					Éditeur du site
				</h3>
				<div className="flex flex-col gap-2">
					{data.infos.map((item) => (
						<div key={item.id} className="flex items-center gap-1">
							<span className="text-default font-semibold">{item.label}:</span>
							<p className="text-default">{item.value}</p>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-semibold font-display pb-2 border-b border-default/15">
					Responsable de la publication
				</h3>
				<p className="text-default">{data.respPub}</p>
			</div>
			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-semibold font-display pb-2 border-b border-default/15">
					Hébergement du site
				</h3>
				<div className="flex flex-col gap-2">
					<p className="text-default">{data.hosting.name}</p>
					<p className="text-default">{data.hosting.address}</p>
					<Link
						href={data.hosting.website.link}
						className="text-primary underline"
					>
						{data.hosting.website.label}
					</Link>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-semibold font-display pb-2 border-b border-default/15">
					Propriété intellectuelle
				</h3>
				<p className="text-default">{data.propIntel}</p>
			</div>
		</section>
	);
};

export default MentionsLegales;
