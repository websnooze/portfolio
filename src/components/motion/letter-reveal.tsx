"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { ComponentProps, ElementType } from "react";

type LetterRevealProps<T extends ElementType> = {
	text: string;
	as?: T;
	className?: string;
	transitionWidth?: number;
} & Omit<ComponentProps<T>, "as" | "children">;

export function LetterReveal<T extends ElementType = "span">({
	text,
	as,
	className,
	transitionWidth = 0.04,
	...rest
}: LetterRevealProps<T>) {
	const Component = (as || "span") as ElementType;
	const rootRef = useRef<HTMLSpanElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: rootRef,
		offset: ["start end", "end start"],
	});

	// Découpe en tokens (mots et espaces) pour éviter les césures au milieu des mots
	const tokens = text.split(/(\s+)/);

	// Pré-calcul des indices globaux des lettres (hors espaces)
	let runningIndex = 0;
	const structured = tokens.map((token) => {
		const isSpace = /^\s+$/.test(token);
		if (isSpace) return { type: "space" as const, text: token };
		const letters = Array.from(token);
		const indices = letters.map(() => runningIndex++);
		return { type: "word" as const, letters, indices };
	});

	const totalLetters = runningIndex;

	return (
		<motion.span ref={rootRef} className={className} {...rest}>
			<Component style={{ hyphens: "none" }}>
				{structured.map((part, tokenIdx) => {
					if (part.type === "space") {
						return <span key={`s-${tokenIdx}`}>{part.text}</span>;
					}
					return (
						<span
							key={`w-${tokenIdx}`}
							style={{ display: "inline-block", whiteSpace: "nowrap" }}
						>
							{part.letters.map((char, i) => (
								<LetterSpan
									key={i}
									char={char}
									index={part.indices[i]}
									total={totalLetters}
									progress={scrollYProgress}
									transitionWidth={transitionWidth}
								/>
							))}
						</span>
					);
				})}
			</Component>
		</motion.span>
	);
}

export default LetterReveal;

type LetterSpanProps = {
	char: string;
	index: number;
	total: number;
	progress: import("motion").MotionValue<number>;
	transitionWidth: number;
};

function LetterSpan({
	char,
	index,
	total,
	progress,
	transitionWidth,
}: LetterSpanProps) {
	const position = index / total;
	const half = transitionWidth / 2;
	const start = Math.max(0, position - half);
	const end = Math.min(1, position + half);

	const delta = end - start;
	const mid = start + delta * 0.35; // montée plus rapide pour un effet plus marqué
	const opacity = useTransform(progress, [start, mid, end], [0.2, 1, 1]);

	return (
		<motion.span style={{ display: "inline-block", opacity }}>
			{char}
		</motion.span>
	);
}
