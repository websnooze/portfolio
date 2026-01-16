import { communityData } from "@/components/data";
import { SectionTitle } from "@/components/modules";
import { ButtonMotion } from "@/components/motion";
import Link from "next/link";

const AboutCommunity = () => {
	const data = communityData;

	return (
		<section
			id="section"
			className="container flex sm:flex-col-reverse items-center lg:gap-20 sm:gap-8"
		>
			<div className="grid grid-cols-2 sm:grid-cols-1 gap-4 w-full">
				{data.grid.map((item) => (
					<div
						key={item.id}
						className="rounded-3xl border border-content1 p-6 h-fit w-full"
					>
						<div className="mb-4 w-fit rounded-full border border-content3 bg-content1 p-4 text-primary">
							<item.icon className="w-5 h-5" />
						</div>
						<h4 className="mb-2 text-xl font-semibold">{item.title}</h4>
						<p className="text-default">{item.description}</p>
					</div>
				))}
			</div>
			<div className="flex flex-col items-start w-full">
				<SectionTitle title={data.title} subtitle={data.subtitle}>
					<p className="text-default text-balance">{data.description}</p>
				</SectionTitle>
				<div className="flex flex-wrap gap-4 py-8">
					{data.values.map((item) => (
						<div key={item.id} className="flex flex-col">
							<div className="font-display text-5xl font-medium">
								<span className="text-content1-foreground inline-block tabular-nums tracking-wider">
									{item.value}
								</span>
								<span className="inline">{item.prefix}</span>
							</div>
							<p className="text-default">{item.text}</p>
						</div>
					))}
				</div>
				<Link href={data.button.link} target="_blank">
					<ButtonMotion label={data.button.label} />
				</Link>
			</div>
		</section>
	);
};

export default AboutCommunity;
