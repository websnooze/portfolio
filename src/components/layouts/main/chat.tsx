"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { AnimatePresence, motion } from "motion/react";

import { ChatBody, ChatFooter, ChatHeader } from "@/components/chat";
import { useChat } from "@/hooks/useChat";
import { Bot } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const ChatBot = () => {
	const isMobile = useMediaQuery({ maxWidth: 640 });
	const [isOpen, setIsOpen] = useState(false);
	const [maximized, setMaximize] = useState(false);

	const {
		messages,
		isLoading,
		streamingContent,
		error,
		sendMessage,
		clearMessages,
		addSuggestedQuestion,
	} = useChat();

	const handleRetry = () => {
		// Retry en renvoyant le dernier message utilisateur
		if (messages.length > 0) {
			const lastUserMessage = messages
				.filter((msg) => msg.role === "user")
				.pop();
			if (lastUserMessage) {
				sendMessage(lastUserMessage.content);
			}
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	return (
		<>
			<Button
				aria-label="Chat with the bot"
				radius="full"
				className="lg:h-14 z-50 lg:w-14 !px-0 sm:h-12 sm:w-12 lg:min-w-14 lg:min-h-14 sm:min-w-12 sm:min-h-12 fixed bottom-6 right-6 sm:bottom-20 sm:right-4 bg-content1-foreground border border-content1"
				onPress={() => setIsOpen(!isOpen)}
			>
				<Bot className="text-background w-6 h-6" />
			</Button>
			<AnimatePresence mode="wait">
				{isOpen && (
					<motion.div
						initial={{
							opacity: 0,
							scale: 0.95,
							width: isMobile ? "100%" : "500px",
							height: isMobile ? "100dvh" : "70vh",
						}}
						animate={{
							opacity: 1,
							scale: 1,
							width:
								maximized && !isMobile ? "50vw" : isMobile ? "100%" : "500px",
							height:
								maximized && !isMobile ? "85vh" : isMobile ? "100dvh" : "70vh",
						}}
						exit={{ opacity: 0, scale: 0.95, width: "500px", height: "70vh" }}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
							width: { duration: 0.3, ease: "easeInOut" },
							height: { duration: 0.3, ease: "easeInOut" },
						}}
						style={{
							width: isMobile ? "100%" : "",
							maxWidth: isMobile ? "100%" : "700px",
							overscrollBehavior: "contain",
							scrollbarGutter: "stable",
							overflow: "hidden",
						}}
						className="border-chatborder lg:bg-background/95 sm:bg-background fixed top-0 right-0 z-50 flex flex-col backdrop-blur-xs sm:bottom-0 sm:left-0 lg:top-auto lg:right-6 lg:bottom-24 lg:rounded-2xl lg:border lg:shadow-xl chat-container"
						onTouchMove={(e) => {
							// Empêcher le scroll sur mobile
							e.stopPropagation();
						}}
					>
						<ChatHeader
							setIsOpen={setIsOpen}
							setMaximize={setMaximize}
							maximized={maximized}
							onClearMessages={clearMessages}
							hasMessages={messages.length > 0}
						/>
						<ChatBody
							messages={messages}
							isLoading={isLoading}
							streamingContent={streamingContent}
							error={error}
							onQuestionSelect={addSuggestedQuestion}
							onRetry={handleRetry}
							onCloseChat={() => setIsOpen(false)}
						/>
						<ChatFooter onSendMessage={sendMessage} isLoading={isLoading} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default ChatBot;
