"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/components/data";
import clsx from "clsx";

const MobileNav = () => {
	const pathname = usePathname();

	return (
		<nav className="flex items-center fixed bottom-0 left-0 right-0 z-50 w-full lg:hidden">
			<ul className="border-content1 bg-background/80 flex w-full justify-evenly rounded-t-3xl border-t shadow backdrop-blur-md">
				{navigationData.map((item) => {
					const isActive = pathname === item.link;
					return (
						<li key={item.id} className="p-4">
							<Link
								href={item.link}
								className={clsx(
									"flex flex-col items-center justify-center gap-1",
									isActive ? "text-primary" : "text-content1-foreground",
									"transition-all duration-300"
								)}
							>
								<item.icon className="w-5 h-5" />
								<span className="text-xs font-medium">{item.label}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default MobileNav;
