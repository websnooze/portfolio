import React from "react";
import { homeMarqueeData } from "../data";
import { Sparkle } from "lucide-react";

const HomeMarquee = () => {
	const data = homeMarqueeData;

	return (
		<div className="border-content1 py-8 relative flex flex-col overflow-hidden border-y">
			<div className="overflow-hidden">
				<div className="flex w-max gap-4">
					{Array.from({ length: 10 }).map((_, index) => (
						<div
							key={index}
							className="flex items-center gap-4 animate-marquee"
						>
							{data.map((item) => (
								<div key={item.id} className="flex items-center gap-4">
									<h2 className="text-content3 text-5xl font-display font-medium brightness-110">
										{item.label}
									</h2>
									<Sparkle className="w-5 h-5 text-content3 brightness-110" />
								</div>
							))}
						</div>
					))}
				</div>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background" />
			</div>
		</div>
	);
};

export default HomeMarquee;
