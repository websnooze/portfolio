import React from "react";
import { technosData } from "@/components/data";
import Image from "next/image";

const TechMarquee = () => {
	const data = technosData;

	return (
		<div className="relative flex flex-col overflow-hidden border-y border-content1 py-8 border-none">
			<div className="overflow-hidden">
				<div className="flex w-max gap-4">
					{Array.from({ length: 10 }).map((_, index) => (
						<div
							key={index}
							className="flex items-center gap-4 animate-marquee"
						>
							{data.map((item) => (
								<div
									key={item.id}
									className="inline-flex w-fit min-w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm shadow transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-content1-foreground bg-content1"
								>
									<div className="relative h-4.5 w-4.5">
										<Image
											src={item.img}
											alt={item.alt}
											height={18}
											width={18}
											className="absolute h-full w-full left-0 top-0 right-0 bottom-0 color-transparent"
										/>
									</div>
									<span className="text-sm font-medium">{item.label}</span>
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

export default TechMarquee;
