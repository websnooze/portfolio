import { ReactNode } from "react";
import ShinyText from "@/components/motion/shiny-text";
import { Sparkle } from "lucide-react";

const SectionTitle = ({
	title,
	subtitle,
	children,
}: {
	title: string;
	subtitle: string;
	children?: ReactNode;
}) => {
	return (
		<div className="flex flex-col">
			<div className="mb-4 flex w-fit items-center gap-2 text-primary">
				<Sparkle className="w-[18px] h-[18px] text-primary" />
				<ShinyText
					className="word-spacing font-display text-sm uppercase font-medium leading-none text-primary"
					text={title}
					speed={1}
				/>
			</div>
			<h2 className="text-5xl font-medium font-display mb-8">{subtitle}</h2>
			{children}
		</div>
	);
};

export default SectionTitle;
