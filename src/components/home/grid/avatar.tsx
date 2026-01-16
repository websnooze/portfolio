"use client";

import { Avatar } from "@heroui/react";
import clsx from "clsx";

const HomeAvatar = () => {
	return (
		<div
			className={clsx(
				"relative",
				"flex items-center justify-center",
				"overflow-hidden",
				"w-48 h-48 rounded-3xl",
				"bg-secondary"
			)}
		>
			<Avatar
				src="/images/memoji_1.webp"
				classNames={{ base: "absolute bottom-0 w-40 h-40 bg-transparent" }}
				radius="none"
			/>
		</div>
	);
};

export default HomeAvatar;
