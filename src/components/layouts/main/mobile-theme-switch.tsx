"use client";

import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

const MobileThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

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
			onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="bg-background border border-content1 z-[999999] h-10 w-10 data-[hover=true]:bg-toggle"
		>
			{theme === "dark" ? (
				<Sun className="w-5 h-5 text-content1-foreground" />
			) : (
				<Moon className="w-5 h-5 text-content1-foreground" />
			)}
		</Button>
	);
};

export default MobileThemeSwitch;
