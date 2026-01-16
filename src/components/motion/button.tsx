import clsx from "clsx";

const ButtonMotion = ({
	label,
	type = "button",
	disabled = false,
}: {
	label: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={clsx(
				"btn ring-offset-background",
				"focus-visible:ring-primary",
				"whitespace-nowrap transition-colors",
				"focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden",
				"disabled:pointer-events-none disabled:opacity-50",
				"btn__outline m-auto block"
			)}
		>
			<span className="btn__ripple" />
			<span className="block overflow-hidden">
				<span className="btn__text" data-attr={label}>
					{label}
				</span>
			</span>
		</button>
	);
};

export default ButtonMotion;
