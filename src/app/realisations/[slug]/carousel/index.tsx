"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./buttons";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@heroui/react";
import { X } from "lucide-react";
import { useMediaQuery } from "react-responsive";

type PropType = {
	title: string;
	gallery: string[];
	options?: EmblaOptionsType;
};

export const ProjectCarousel: React.FC<PropType> = (props) => {
	const isMobile = useMediaQuery({ maxWidth: 640 });
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const { title, gallery, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	const onOpen = (image: string) => {
		if (!isMobile) {
			setSelectedImage(image);
		}
	};
	const onClose = () => {
		if (!isMobile) {
			setSelectedImage(null);
		}
	};

	return (
		<>
			<div className="flex flex-col gap-8 items-end">
				<div className="relative max-w-full m-auto">
					<div
						className="overflow-hidden bg-content2 w-full rounded-2xl"
						ref={emblaRef}
					>
						<div className="flex touch-pan-y touch-pinch-zoom w-full">
							{gallery.map((image, index) => (
								<Image
									onClick={() => onOpen(image)}
									key={image}
									src={image}
									alt={`Image numéro ${index + 1} de ${title}`}
									width={800}
									height={250}
									className="bg-content2 lg:cursor-pointer h-fit min-w-full rounded-2xl"
								/>
							))}
						</div>
					</div>
					<div className="absolute flex justify-center bottom-0 w-full h-32">
						<div className="flex items-center gap-4 sm:hidden">
							<PrevButton
								disabled={prevBtnDisabled}
								onClick={onPrevButtonClick}
							/>
							<NextButton
								disabled={nextBtnDisabled}
								onClick={onNextButtonClick}
							/>
						</div>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={onClose}
						className="fixed inset-0 z-[999999] bg-black bg-opacity-50 flex items-center justify-center"
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.3 }}
							className="flex w-full h-full items-center justify-center"
						>
							<Image
								src={selectedImage}
								alt={`Image de ${title}`}
								width={800}
								height={250}
								className="w-full h-full object-cover"
							/>
						</motion.div>
						<Button
							onPress={onClose}
							isIconOnly
							className="absolute top-4 right-4 bg-transparent text-content1-foreground"
						>
							<X className="w-6 h-6" />
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
