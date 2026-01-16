"use client";

import { ElementType } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./buttons";

type PropType = {
	slides: {
		id: number;
		icon: ElementType;
		title: string;
		description: string;
	}[];
	options?: EmblaOptionsType;
};

export const StepsCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<div className="flex flex-col gap-8 items-end lg:-mt-8 sm:mt-8">
			<div className="flex items-center gap-4 sm:hidden">
				<PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
				<NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
			</div>
			<div className="max-w-full m-auto">
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex touch-pan-y touch-pinch-zoom gap-4">
						{slides.map((slide) => (
							<div
								className="w-full rounded-3xl border border-content1 p-6 min-w-[300px]"
								key={slide.id}
							>
								<div className="mb-4 w-fit rounded-full border border-content3 bg-content1 p-4 text-primary">
									<slide.icon className="w-5 h-5" />
								</div>
								<h3 className="mb-2 text-xl">{slide.title}</h3>
								<p className="text-default">{slide.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
