"use client";

import { ButtonMotion } from "@/components/motion";
import { useContact } from "@/context/contact";
import clsx from "clsx";
import { CircleCheck, Timer } from "lucide-react";
import { useRouter } from "next/navigation";

interface PriceCardProps {
	id: number;
	title: string;
	key: string;
	titleColor: string;
	background: string;
	price: number;
	duration: string;
	description: string;
	features: string[];
	devis: boolean;
}

const PriceCard = ({ item }: { item: PriceCardProps }) => {
	const { setSelectedReason } = useContact();
	const router = useRouter();

	const handlePlanSelect = (
		reason: "Site Vitrine" | "Site E-commerce" | "Application web ou mobile"
	) => {
		setSelectedReason(reason);
		router.push("/contact");
	};

	return (
		<article
			className={clsx(
				"w-full rounded-3xl border border-content1 p-6 flex flex-col gap-6",
				item.background
			)}
		>
			<div className="flex flex-col gap-2">
				<h3 className={clsx("text-2xl font-bold text-center", item.titleColor)}>
					{item.title}
				</h3>
				<p className="text-sm text-default text-center">{item.description}</p>
			</div>
			<div className="flex items-center justify-center gap-2">
				<Timer className="w-4 h-4 text-deafult" />
				<span className="text-default">{item.duration}</span>
			</div>
			<div className="flex flex-col gap-2">
				{item.features.map((feature) => (
					<div key={feature} className="flex items-center gap-2">
						<CircleCheck className="w-4 h-4 text-primary" />
						<span className="sm:text-sm text-foreground">{feature}</span>
					</div>
				))}
			</div>
			<div
				className="w-full mt-14"
				onClick={() =>
					handlePlanSelect(
						item.key as
							| "Site Vitrine"
							| "Site E-commerce"
							| "Application web ou mobile"
					)
				}
			>
				<ButtonMotion
					label={
						item.devis
							? `Sur devis (à partir de ${item.price}€)`
							: `À partir de ${item.price}€`
					}
				/>
			</div>
		</article>
	);
};

export default PriceCard;
