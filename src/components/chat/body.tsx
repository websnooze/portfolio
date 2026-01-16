"use client";

import { Bot } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Message } from "@/types/chat";
import MessageComponent from "./message";
import LoadingToResponse from "./loading-to-response";
import SuggestedQuestions from "./suggested-questions";
import ErrorMessage from "./error-message";

interface ChatBodyProps {
	messages: Message[];
	isLoading: boolean;
	streamingContent: string;
	error: string | null;
	onQuestionSelect: (question: string) => void;
	onRetry?: () => void;
	onCloseChat?: () => void;
}

const ChatBody = ({
	messages,
	isLoading,
	streamingContent,
	error,
	onQuestionSelect,
	onRetry,
	onCloseChat,
}: ChatBodyProps) => {
	const chatContainerRef = useRef<HTMLDivElement>(null);

	// Auto-scroll vers le bas quand de nouveaux messages arrivent ou pendant le streaming
	useEffect(() => {
		if (chatContainerRef.current) {
			const container = chatContainerRef.current;
			const scrollToBottom = () => {
				container.scrollTop = container.scrollHeight;
			};

			// Scroll immédiat
			scrollToBottom();

			// Scroll avec un délai pour s'assurer que le contenu est rendu
			const timeoutId = setTimeout(scrollToBottom, 100);
			return () => clearTimeout(timeoutId);
		}
	}, [messages, isLoading, streamingContent]);

	if (messages.length === 0) {
		return (
			<div className="flex-1 flex items-center justify-center p-4">
				<div className="text-default flex flex-col items-center justify-center space-y-4 text-center max-w-md">
					<Bot className="h-12 w-12" />
					<div className="space-y-4">
						<p className="text-sm">
							Bonjour ! Je suis l&apos;assistant Novata. Posez-moi vos questions
							sur nos services, tarifs et compétences.
						</p>
						<SuggestedQuestions onQuestionSelect={onQuestionSelect} />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			ref={chatContainerRef}
			className="flex-1 p-4 space-y-4 overflow-y-auto overflow-x-hidden"
			style={{
				overscrollBehavior: "contain",
				scrollbarGutter: "stable",
				WebkitOverflowScrolling: "touch",
			}}
			onWheel={(e) => {
				// Empêcher la propagation du scroll au parent
				e.stopPropagation();
			}}
			onTouchMove={(e) => {
				// Empêcher la propagation du scroll sur mobile
				e.stopPropagation();
			}}
		>
			{/* Messages existants */}
			{messages.map((message) => (
				<MessageComponent
					key={message.id}
					message={message}
					onCloseChat={onCloseChat}
				/>
			))}

			{/* Loading qui se transforme en réponse */}
			{(isLoading || streamingContent) && (
				<LoadingToResponse
					isLoading={isLoading}
					content={streamingContent}
					onCloseChat={onCloseChat}
				/>
			)}

			{error && <ErrorMessage error={error} onRetry={onRetry} />}
		</div>
	);
};

export default ChatBody;
