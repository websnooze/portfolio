"use client";

import {
	LayoutGroup,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import { useMemo } from "react";
import { navigationData } from "@/components/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./theme-switch";
import { Logo } from "@/components/icons";
import clsx from "clsx";

const SHRINK_DISTANCE_PX = 200;
const FULL_WIDTH_PERCENT = 100;
const MIN_WIDTH_PERCENT = 55;

const Navbar = () => {
	const pathname = usePathname();
	const { scrollY } = useScroll();
	const rawWidthPercent = useTransform(
		scrollY,
		[0, SHRINK_DISTANCE_PX],
		[FULL_WIDTH_PERCENT, MIN_WIDTH_PERCENT]
	);
	const widthPercent = useSpring(rawWidthPercent, {
		stiffness: 260,
		damping: 32,
		mass: 0.6,
	});
	const width = useTransform(widthPercent, (v: number) => `${v}%`);

	const borderOpacity = useTransform(
		widthPercent,
		[FULL_WIDTH_PERCENT, MIN_WIDTH_PERCENT],
		[0, 1]
	);
	const borderColor = useTransform(borderOpacity, (o: number) => {
		return `rgba(var(--nav-border-rgb), ${o})`;
	});

	const rawBackgroundOpacity = useTransform(
		scrollY,
		[0, SHRINK_DISTANCE_PX],
		[0, 1]
	);
	const backgroundOpacity = useSpring(rawBackgroundOpacity, {
		stiffness: 260,
		damping: 30,
	});

	const containerMaxWidthClass = useMemo(() => "container", []);

	return (
		<header className="pointer-events-none fixed left-0 right-0 top-0 z-50 w-full px-0 py-4 sm:hidden">
			<div className={`${containerMaxWidthClass} mx-auto`}>
				<motion.nav
					style={{ width, borderColor }}
					className="pointer-events-auto relative overflow-hidden mx-auto rounded-full border backdrop-blur h-12 px-2 flex items-center justify-between [--nav-border-rgb:226,232,240] dark:[--nav-border-rgb:25,25,32]"
				>
					<motion.div
						aria-hidden
						className="absolute inset-0 rounded-full bg-content2/80 dark:bg-background/80 backdrop-blur-md"
						style={{ opacity: backgroundOpacity }}
					/>

					<Link
						href="/"
						aria-label="Accueil"
						className="flex items-center gap-0.5 justify-center z-40"
					>
						<Logo className="w-8 h-8 text-content1-foreground" />
					</Link>

					<ul className="text-default gap-6 text-sm flex list-none">
						<LayoutGroup>
							{navigationData.map((item) => {
								const isActive = pathname === item.link;
								return (
									<li key={item.id} className="group relative">
										<Link
											href={item.link}
											className={clsx(
												"flex items-center gap-2",
												isActive ? "text-content1-foreground" : "text-default",
												"transition-all duration-300"
											)}
										>
											{isActive ? (
												<motion.div
													layoutId="active-nav-item"
													className="h-1.5 w-1.5 rounded-full bg-primary"
												/>
											) : (
												<div className="h-1.5 w-1.5 rounded-full bg-transparent" />
											)}
											<div className="relative inline-flex overflow-hidden font-medium">
												<span className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-11">
													{item.label}
												</span>
												<span className="text-text-primary absolute translate-y-[110%] skew-y-11 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
													{item.label}
												</span>
											</div>
										</Link>
									</li>
								);
							})}
						</LayoutGroup>
					</ul>
					<ThemeSwitch speed="slow" />
					<div className="relative z-10 md:hidden" />
				</motion.nav>
			</div>
		</header>
	);
};

export default Navbar;
