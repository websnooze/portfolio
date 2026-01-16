"use client";

import { Bot } from "lucide-react";
import type { Message } from "@/types/chat";
import LoadingDots from "./loading-dots";

interface StreamingMessageProps {
	message: Message;
	isStreaming: boolean;
}

const StreamingMessage = ({ message, isStreaming }: StreamingMessageProps) => {
	return (
		<div className="flex gap-3 justify-start">
			<div className="flex-shrink-0">
				<div className="w-8 h-8 rounded-full bg-content1-foreground flex items-center justify-center">
					<Bot className="w-4 h-4 text-background" />
				</div>
			</div>
			<div className="bg-content1 border border-chatborder rounded-2xl px-4 py-3 min-h-[44px] transition-all duration-200 ease-out">
				{isStreaming && !message.content ? (
					<LoadingDots />
				) : (
					<p className="text-sm whitespace-pre-wrap">
						{message.content}
						{isStreaming && (
							<span className="inline-block w-1 h-4 bg-content1-foreground ml-1 animate-pulse" />
						)}
					</p>
				)}
			</div>
		</div>
	);
};

export default StreamingMessage;
