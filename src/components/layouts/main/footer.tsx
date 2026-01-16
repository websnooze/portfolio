"use client";

import Link from "next/link";
import { ButtonMotion } from "@/components/motion";
import { socialsData } from "@/components/data";
import { usePathname } from "next/navigation";
import { Divider } from "@heroui/react";

const Footer = () => {
	const pathname = usePathname();
	const isContact = pathname === "/contact";

	return (
		<footer className="container py-8 sm:mb-[73px]">
			{!isContact && (
				<div className=" flex bg-content2 flex-col items-center rounded-3xl px-4 py-14 lg:mb-4 sm:mb-6 shadow">
					<div className="items-center mb-4 flex gap-2 rounded-full bg-[#B5FF6D]/10 px-4 py-2">
						<span className="relative flex h-[6px] w-[6px]">
							<span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
							<span className="bg-primary relative inline-flex h-full w-full rounded-full" />
						</span>
						<p className="text-content1-foreground font-medium text-xs">
							Disponible
						</p>
					</div>
					<h2 className="text-5xl font-display max-w-xl text-center leading-14 font-medium mb-6">
						Créons votre prochaine grande idée.
					</h2>
					<Link href="/contact">
						<ButtonMotion label="Contactez-nous" />
					</Link>
					<div className="lg:hidden mt-6 flex items-center opacity-container text-default gap-6">
						{socialsData.map((item) => (
							<Link
								key={item.id}
								href={item.link}
								target="_blank"
								aria-label={item.label}
								rel="noopener noreferrer"
							>
								<item.icon className="text-default" />
							</Link>
						))}
					</div>
				</div>
			)}
			<div className="flex items-center lg:justify-between sm:justify-center w-full">
				<div className="flex items-center sm:flex-col gap-2 sm:gap-4">
					<span className="text-content1-foreground dark:text-default text-sm">
						&copy; {new Date().getFullYear()} - Tous droits réservés
					</span>
					<Divider orientation="vertical" className="h-4 sm:hidden" />
					<div className="flex items-center gap-2">
						<Link
							href="/mentions-legales"
							className="text-content1-foreground dark:text-default text-sm dark:hover:text-content1-foreground transition-all duration-300"
						>
							Mentions légales
						</Link>
						<Divider orientation="vertical" className="h-4" />
						<Link
							href="/politique-de-confidentialite"
							className="text-content1-foreground dark:text-default text-sm dark:hover:text-content1-foreground transition-all duration-300"
						>
							Politique de confidentialité
						</Link>
					</div>
				</div>
				<div className="sm:hidden flex items-center opacity-container text-default gap-6">
					{socialsData.map((item) => (
						<Link
							key={item.id}
							href={item.link}
							target="_blank"
							aria-label={item.label}
							rel="noopener noreferrer"
						>
							<item.icon className="text-default" />
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
