"use client";

import { User, Bot } from "lucide-react";
import type { Message } from "@/types/chat";
import StreamingText from "./streaming-text";
import MessageContent from "./message-content";

interface MessageProps {
	message: Message;
	onCloseChat?: () => void;
}

const MessageComponent = ({ message, onCloseChat }: MessageProps) => {
	const isUser = message.role === "user";

	return (
		<div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
			{!isUser && (
				<div className="flex-shrink-0">
					<div className="w-8 h-8 rounded-full bg-content1-foreground flex items-center justify-center">
						<Bot className="w-4 h-4 text-background" />
					</div>
				</div>
			)}

			<div className={`max-w-[80%] ${isUser ? "order-first" : ""}`}>
				<div
					className={`rounded-2xl px-4 py-3 ${
						isUser
							? "bg-content1-foreground text-background"
							: "bg-content1 border border-chatborder"
					}`}
				>
					<p className="text-sm whitespace-pre-wrap">
						{isUser ? (
							message.content
						) : (
							<StreamingText content={message.content}>
								<MessageContent
									content={message.content}
									onCloseChat={onCloseChat}
								/>
							</StreamingText>
						)}
					</p>
				</div>
				<p className="text-xs text-default-500 mt-1 text-center">
					{message.timestamp.toLocaleTimeString("fr-FR", {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</p>
			</div>

			{isUser && (
				<div className="flex-shrink-0">
					<div className="w-8 h-8 rounded-full bg-content1 border border-chatborder flex items-center justify-center">
						<User className="w-4 h-4 text-content1-foreground" />
					</div>
				</div>
			)}
		</div>
	);
};

export default MessageComponent;
