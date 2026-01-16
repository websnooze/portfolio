"use client";

import { useRouter } from "next/navigation";
import { ReactElement } from "react";

interface MessageContentProps {
	content: string;
	onCloseChat?: () => void;
}

const MessageContent = ({ content, onCloseChat }: MessageContentProps) => {
	const router = useRouter();

	// Pattern pour détecter les liens entre crochets : [texte](url)
	const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

	const parts: (string | ReactElement)[] = [];
	let lastIndex = 0;
	let match;
	let keyIndex = 0;

	const handleInternalLinkClick = (e: React.MouseEvent, url: string) => {
		e.preventDefault();
		if (onCloseChat) {
			onCloseChat();
		}
		router.push(url);
	};

	while ((match = linkPattern.exec(content)) !== null) {
		// Ajouter le texte avant le lien
		if (match.index > lastIndex) {
			parts.push(content.substring(lastIndex, match.index));
		}

		const linkText = match[1];
		const linkUrl = match[2];

		// Vérifier si c'est un lien interne (commence par /)
		if (linkUrl.startsWith("/")) {
			parts.push(
				<a
					key={`link-${keyIndex++}`}
					href={linkUrl}
					onClick={(e) => handleInternalLinkClick(e, linkUrl)}
					className="text-primary underline hover:text-primary-600 transition-colors font-medium cursor-pointer"
				>
					{linkText}
				</a>
			);
		} else {
			// Lien externe
			parts.push(
				<a
					key={`link-${keyIndex++}`}
					href={linkUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary underline hover:text-primary-600 transition-colors font-medium"
				>
					{linkText}
				</a>
			);
		}

		lastIndex = match.index + match[0].length;
	}

	// Ajouter le reste du texte
	if (lastIndex < content.length) {
		parts.push(content.substring(lastIndex));
	}

	return <>{parts.length > 0 ? parts : content}</>;
};

export default MessageContent;
