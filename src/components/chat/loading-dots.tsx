"use client";

const LoadingDots = () => {
	return (
		<div className="flex items-center">
			<div className="flex space-x-1">
				<div className="w-2 h-2 bg-content1-foreground rounded-full animate-bounce" />
				<div
					className="w-2 h-2 bg-content1-foreground rounded-full animate-bounce"
					style={{ animationDelay: "0.1s" }}
				/>
				<div
					className="w-2 h-2 bg-content1-foreground rounded-full animate-bounce"
					style={{ animationDelay: "0.2s" }}
				/>
			</div>
		</div>
	);
};

export default LoadingDots;
