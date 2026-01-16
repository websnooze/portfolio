"use client";

import { Bot } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingDots from "./loading-dots";
import MessageContent from "./message-content";

interface LoadingToResponseProps {
	isLoading: boolean;
	content: string;
	onCloseChat?: () => void;
}

const LoadingToResponse = ({
	isLoading,
	content,
	onCloseChat,
}: LoadingToResponseProps) => {
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		if (content && !isLoading) {
			// Dès que le contenu arrive, on l'affiche immédiatement
			setShowContent(true);
		}
	}, [content, isLoading]);

	return (
		<div className="flex gap-3 justify-start">
			<div className="flex-shrink-0">
				<div className="w-8 h-8 rounded-full bg-content1-foreground flex items-center justify-center">
					<Bot className="w-4 h-4 text-background" />
				</div>
			</div>
			<div className="bg-content1 border border-chatborder rounded-2xl px-4 py-3 min-h-[44px] transition-all duration-150 ease-out">
				{isLoading || !showContent ? (
					<LoadingDots />
				) : (
					<p className="text-sm whitespace-pre-wrap">
						<MessageContent content={content} onCloseChat={onCloseChat} />
					</p>
				)}
			</div>
		</div>
	);
};

export default LoadingToResponse;
