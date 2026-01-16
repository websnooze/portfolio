import Link from "next/link";
import MobileThemeSwitch from "./mobile-theme-switch";
import { Logo } from "@/components/icons";

const MobileNavbar = () => {
	return (
		<header className="fixed left-0 right-0 top-4 z-50 w-full px-0 lg:hidden">
			<div className="container flex h-12 justify-between w-full">
				<div className="flex items-center justify-center">
					<Link
						href="/"
						aria-label="Accueil"
						className="bg-background flex items-center justify-center rounded-full border border-content1 z-[999999] h-10 w-10 data-[hover=true]:bg-toggle"
					>
						<Logo className="w-5 h-5 text-content1-foreground" />
					</Link>
				</div>
				<MobileThemeSwitch />
			</div>
		</header>
	);
};

export default MobileNavbar;
