"use client";

import { FieldValues, useForm } from "react-hook-form";
import { Button, Form, Input } from "@heroui/react";
import { Send } from "lucide-react";

interface ChatFooterProps {
	onSendMessage: (message: string) => void;
	isLoading: boolean;
}

const ChatFooter = ({ onSendMessage, isLoading }: ChatFooterProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid },
	} = useForm();

	const onSubmit = (data: FieldValues) => {
		if (data.message?.trim() && !isLoading) {
			onSendMessage(data.message.trim());
			reset();
		}
	};

	return (
		<div className="chat-footer p-4 bg-background">
			<Form
				onSubmit={handleSubmit(onSubmit)}
				className="border-chatborder flex flex-row overflow-hidden items-center gap-2 border p-2 rounded-full"
			>
				<Input
					color="default"
					placeholder="Demandez-moi quelque chose..."
					disabled={isLoading}
					classNames={{
						inputWrapper:
							"bg-transparent data-[hover=true]:bg-transparent data-[focus=true]:bg-transparent shadow-none",
						input:
							"bg-transparent border-none outline-none ring-0 group-data-[has-value=true]:text-content1-foreground",
					}}
					{...register("message", { required: true, minLength: 1 })}
				/>
				<Button
					isIconOnly
					type="submit"
					radius="full"
					disabled={!isValid || isLoading}
					className="bg-content1-foreground h-10 w-10 text-background disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<Send className="w-4 h-4" />
				</Button>
			</Form>
		</div>
	);
};

export default ChatFooter;
