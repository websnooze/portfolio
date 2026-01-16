"use client";

import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
	error: string;
	onRetry?: () => void;
}

const ErrorMessage = ({ error, onRetry }: ErrorMessageProps) => {
	return (
		<div className="flex gap-3 justify-start">
			<div className="flex-shrink-0">
				<div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
					<AlertCircle className="w-4 h-4 text-white" />
				</div>
			</div>
			<div className="bg-red-50 border border-red-200 rounded-2xl px-4 py-3 max-w-[80%]">
				<p className="text-sm text-red-800">{error}</p>
				{onRetry && (
					<button
						onClick={onRetry}
						className="text-xs text-red-600 hover:text-red-800 underline mt-2"
					>
						Réessayer
					</button>
				)}
			</div>
		</div>
	);
};

export default ErrorMessage;
