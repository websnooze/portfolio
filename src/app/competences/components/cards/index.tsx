import { type LucideIcon } from "lucide-react";

interface Pilar {
	id: number;
	icon: LucideIcon;
	title: string;
	description: string;
}

const PilarCard = ({ item }: { item: Pilar }) => {
	return (
		<article className="w-full rounded-3xl border border-content1 p-6 min-w-[300px]">
			<div className="mb-4 w-fit rounded-full border border-content3 bg-content1 p-4 text-primary">
				<item.icon className="w-5 h-5" />
			</div>
			<h3 className="mb-2 text-xl">{item.title}</h3>
			<p className="text-default">{item.description}</p>
		</article>
	);
};

export default PilarCard;
