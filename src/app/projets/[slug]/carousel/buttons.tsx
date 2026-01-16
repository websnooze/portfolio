import React, {
	ComponentPropsWithRef,
	useCallback,
	useEffect,
	useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

type UsePrevNextButtonsType = {
	prevBtnDisabled: boolean;
	nextBtnDisabled: boolean;
	onPrevButtonClick: () => void;
	onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
	emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	}, [emblaApi]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	}, [emblaApi]);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setPrevBtnDisabled(!emblaApi.canScrollPrev());
		setNextBtnDisabled(!emblaApi.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect(emblaApi);
		emblaApi.on("reInit", onSelect).on("select", onSelect);
	}, [emblaApi, onSelect]);

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	};
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;

	return (
		<button
			aria-label="Précédent"
			className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300 h-10 w-10 rounded-full border border-content3 bg-content1 flex items-center justify-center"
			type="button"
			{...restProps}
		>
			<ChevronLeft className="w-5 h-5" />
			{children}
		</button>
	);
};

export const NextButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;

	return (
		<button
			aria-label="Suivant"
			className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300 h-10 w-10 rounded-full border border-content3 bg-content1 flex items-center justify-center"
			type="button"
			{...restProps}
		>
			<ChevronRight className="w-5 h-5" />
			{children}
		</button>
	);
};
