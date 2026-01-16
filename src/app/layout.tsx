import { satoshi, clashDisplay } from "./fonts";

import clsx from "clsx";

import type { Metadata } from "next";

import "./globals.css";
import {
	Navbar,
	Footer,
	ScrollShadow,
	MobileNav,
	ChatBot,
	MobileNavbar,
} from "@/components/layouts/main";
import { Providers } from "./providers";
import { navigationLd, pageLd } from "@/seo";
import Script from "next/script";
export const metadata: Metadata = {
	metadataBase: new URL("https://novata.fr"),
	title: "Novata",
	description: "Novata",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" translate="no">
			<head>
				<meta name="apple-mobile-web-app-title" content="Novata" />
				<meta name="mobile-web-app-capable" content="yes" />
				<script type="application/ld+json">
					{JSON.stringify(navigationLd)}
				</script>
				<script type="application/ld+json">{JSON.stringify(pageLd)}</script>
				<Script
					async
					defer
					src="https://analytics.novata.fr/script.js"
					data-website-id="96edef76-b680-44a7-a1df-5518893ffbac"
					strategy="afterInteractive"
				/>
			</head>
			<body
				className={clsx(
					satoshi.variable,
					clashDisplay.variable,
					"antialiased",
					"flex flex-col",
					"overscroll-none",
					"font-sans"
				)}
			>
				<Providers>
					<ScrollShadow position="top" />
					<Navbar />
					<MobileNavbar />
					{children}
					<MobileNav />
					<Footer />
					<ChatBot />
					<ScrollShadow position="bottom" />
				</Providers>
			</body>
		</html>
	);
}
