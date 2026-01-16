"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";
import {
	ThemeSwitchProps,
	resolveAnimationDuration,
	cubicBezierProgressAtX,
} from "@/components/functions";

const ThemeSwitch = ({ speed }: ThemeSwitchProps) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const ref = useRef<HTMLButtonElement | null>(null);
	const isAnimatingRef = useRef(false);
	const previousOverflowRef = useRef<string>("");
	const duration = resolveAnimationDuration(speed);

	const handleThemeToggle = async () => {
		if (isAnimatingRef.current) return;

		const targetTheme = theme === "dark" ? "light" : "dark";
		const prefersReduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		if (!ref.current || prefersReduced) {
			setTheme(targetTheme);
			return;
		}

		isAnimatingRef.current = true;
		previousOverflowRef.current = document.documentElement.style.overflow;
		document.documentElement.style.overflow = "hidden";

		// Capturer la position du bouton immédiatement au moment du clic
		const rect = ref.current.getBoundingClientRect();

		// Calculer le centre du bouton en coordonnées relatives au viewport
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const container = document.createElement("div");
		container.style.position = "fixed";
		container.style.inset = "0";
		container.style.zIndex = "2147483647";
		container.style.pointerEvents = "none";
		container.style.contain = "paint";

		const disk = document.createElement("div");
		disk.style.position = "fixed";
		disk.style.top = `${centerY}px`;
		disk.style.left = `${centerX}px`;
		disk.style.width = "300vmax";
		disk.style.height = "300vmax";
		disk.style.transform = "translate(-50%, -50%) scale(1)";
		disk.style.transformOrigin = "center center";
		disk.style.borderRadius = "999999px";
		const oldThemeColor = theme === "dark" ? "#0b0b0c" : "#f7f8fa";
		disk.style.backgroundColor = oldThemeColor;
		disk.style.willChange = "transform, opacity";

		const feather = 500;
		const maskGradient = `radial-gradient(closest-side, rgba(0,0,0,1) calc(100% - ${feather}px), rgba(0,0,0,0) 100%)`;
		disk.style.setProperty("mask-image", maskGradient);
		disk.style.setProperty("-webkit-mask-image", maskGradient);
		disk.style.setProperty("mask-repeat", "no-repeat");
		disk.style.setProperty("-webkit-mask-repeat", "no-repeat");

		container.appendChild(disk);
		document.body.appendChild(container);

		flushSync(() => setTheme(targetTheme));

		const progressAt75 = cubicBezierProgressAtX(0.75, 0.22, 1, 0.36, 1);
		const scaleAt75 = 1 - progressAt75;

		const shrink = disk.animate(
			[
				{
					offset: 0,
					transform: "translate(-50%, -50%) scale(1)",
					easing: "cubic-bezier(0.22, 1, 0.36, 1)",
				},
				{
					offset: 0.75,
					transform: `translate(-50%, -50%) scale(${scaleAt75})`,
					easing: "linear",
				},
				{
					offset: 1,
					transform: "translate(-50%, -50%) scale(0)",
				},
			],
			{
				duration,
				fill: "forwards",
			}
		);
		await shrink.finished.catch(() => {});

		container.remove();
		document.documentElement.style.overflow = previousOverflowRef.current;
		isAnimatingRef.current = false;
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Button
			isIconOnly
			variant="light"
			radius="full"
			size="sm"
			aria-label="Switch theme"
			onPress={handleThemeToggle}
			className="relative sm:bg-background sm:border sm:border-content1 z-[999999] sm:h-10 sm:w-10 data-[hover=true]:bg-toggle"
			ref={ref}
		>
			{theme === "dark" ? (
				<Moon className="w-5 h-5 text-content1-foreground" />
			) : (
				<Sun className="w-5 h-5 text-content1-foreground" />
			)}
		</Button>
	);
};

export default ThemeSwitch;
