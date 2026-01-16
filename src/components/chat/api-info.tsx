"use client";

import { Info } from "lucide-react";
import { Button, Tooltip } from "@heroui/react";
import { MISTRAL_CONFIG } from "@/config/api";

interface APIInfoProps {
	onShowDetails?: () => void;
}

const APIInfo = ({ onShowDetails }: APIInfoProps) => {
	return (
		<div className="flex items-center gap-2 text-xs text-default-500">
			<span>Powered by {MISTRAL_CONFIG.name}</span>
			<span>•</span>
			<span>{MISTRAL_CONFIG.modelName}</span>

			{onShowDetails && (
				<Tooltip content="Voir les détails de l'API Mistral">
					<Button
						isIconOnly
						size="sm"
						variant="light"
						className="h-4 w-4 min-w-4"
						onPress={onShowDetails}
					>
						<Info className="w-3 h-3" />
					</Button>
				</Tooltip>
			)}
		</div>
	);
};

export default APIInfo;
