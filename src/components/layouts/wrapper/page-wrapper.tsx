"use client";

import { motion, AnimatePresence, easeInOut } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface PageWrapperProps {
	children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
	const pathname = usePathname();
	const [isRevealed, setIsRevealed] = useState(false);

	useEffect(() => {
		// Démarrer avec hideRevealFx
		setIsRevealed(false);

		// Après un court délai, passer à revealedFx
		const timer = setTimeout(() => {
			setIsRevealed(true);
		}, 100);

		return () => clearTimeout(timer);
	}, [pathname]);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				transition={{ duration: 0.3, ease: easeInOut }}
				className={`w-full relative overflow-hidden revealFx ${
					isRevealed ? "revealedFx" : "hideRevealFx"
				}`}
				style={{
					minHeight: "calc(100vh - 80px)",
				}}
			>
				<div className="px-4 py-8">{children}</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default PageWrapper;
