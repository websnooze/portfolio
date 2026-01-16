"use client";

import { useEffect, useState, ReactNode } from "react";

interface StreamingTextProps {
	content: string;
	className?: string;
	children?: ReactNode;
}

const StreamingText = ({
	content,
	className = "",
	children,
}: StreamingTextProps) => {
	const [displayedContent, setDisplayedContent] = useState("");

	useEffect(() => {
		setDisplayedContent(content);
	}, [content]);

	return (
		<span
			className={`inline-block transition-all duration-200 ease-out ${className}`}
		>
			{children || displayedContent}
		</span>
	);
};

export default StreamingText;
