import clsx from "clsx";

const ScrollShadow = ({
	position = "top",
}: {
	position?: "top" | "bottom";
}) => {
	const positions = {
		top: "left-0 top-0 bg-gradient-to-b from-background via-background/50 to-background/0",
		bottom:
			"left-0 bottom-0 bg-gradient-to-t from-background via-background/50 to-background/0",
	};

	return (
		<div className={clsx(positions[position], "fixed w-full h-8", "z-40")} />
	);
};

export default ScrollShadow;
