"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactLenis, useLenis } from "lenis/react";
import { FC, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ContactProvider } from "@/context/contact";

type LenisScrollProviderProps = {
	children: React.ReactNode;
};

const ScrollToTop = () => {
	const lenis = useLenis();
	const pathname = usePathname();

	useEffect(() => {
		if (lenis) {
			lenis.scrollTo(0, { duration: 1 });
		}
	}, [pathname, lenis]);

	return null;
};

export const Providers: FC<LenisScrollProviderProps> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const lenisRef = useRef(null);

	return (
		<HeroUIProvider className="flex lg:grow flex-col">
			<NextThemesProvider attribute="class" defaultTheme="light">
				<ReactLenis
					ref={lenisRef}
					root
					options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
				>
					<ScrollToTop />
					<ContactProvider>{children}</ContactProvider>
				</ReactLenis>
			</NextThemesProvider>
		</HeroUIProvider>
	);
};
