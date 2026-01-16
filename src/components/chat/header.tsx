"use client";

import { Button } from "@heroui/react";
import { Bot, Maximize2, Minimize2, X, RotateCcw } from "lucide-react";

interface ChatHeaderProps {
	setIsOpen: (isOpen: boolean) => void;
	setMaximize: (maximized: boolean) => void;
	maximized: boolean;
	onClearMessages: () => void;
	hasMessages: boolean;
}

const ChatHeader = ({
	setIsOpen,
	setMaximize,
	maximized,
	onClearMessages,
	hasMessages,
}: ChatHeaderProps) => {
	return (
		<header className="border-chatborder flex flex-none items-center justify-between border-b px-4 py-3 backdrop-blur-lg">
			<div className="flex items-center gap-4">
				<div className="relative">
					<div className="border-background bg-content1-foreground aspect-square rounded-full border p-2">
						<Bot className="text-background w-6 h-6" />
					</div>
					<div className="border-background bg-[#17c964] absolute right-[2px] bottom-[2px] h-3 w-3 rounded-full border-2" />
				</div>
				<div className="flex flex-col">
					<h3 className="text-base font-semibold">Assistant IA</h3>
					<h3 className="text-default text-xs">Développé par Novata</h3>
				</div>
			</div>
			<div className="flex items-center gap-2">
				{hasMessages && (
					<Button
						isIconOnly
						variant="light"
						className="text-content1-foreground rounded-lg h-10 w-10 data-[hover=true]:bg-default/15"
						onPress={onClearMessages}
						title="Effacer la conversation"
					>
						<RotateCcw className="w-4 h-4" />
					</Button>
				)}
				<Button
					isIconOnly
					variant="light"
					className="text-content1-foreground sm:hidden rounded-lg h-10 w-10 data-[hover=true]:bg-default/15"
					onPress={() => setMaximize(!maximized)}
				>
					{maximized ? (
						<Minimize2 className="w-4 h-4" />
					) : (
						<Maximize2 className="w-4 h-4" />
					)}
				</Button>
				<Button
					isIconOnly
					variant="light"
					onPress={() => setIsOpen(false)}
					className="text-content1-foreground rounded-lg h-10 w-10 data-[hover=true]:bg-default/15"
				>
					<X className="w-4 h-4" />
				</Button>
			</div>
		</header>
	);
};

export default ChatHeader;
