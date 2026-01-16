"use client";

import { Button } from "@heroui/react";

interface SuggestedQuestionsProps {
	onQuestionSelect: (question: string) => void;
}

const SUGGESTED_QUESTIONS = [
	"Présentez-moi l'agence Novata",
	"Quels services proposez-vous ?",
	"Quels sont vos tarifs ?",
];

const SuggestedQuestions = ({ onQuestionSelect }: SuggestedQuestionsProps) => {
	return (
		<div className="space-y-3">
			<p className="text-sm text-default-600 font-medium">
				Questions suggérées :
			</p>
			<div className="flex flex-wrap gap-2">
				{SUGGESTED_QUESTIONS.map((question, index) => (
					<Button
						key={index}
						size="sm"
						variant="bordered"
						className="text-xs border-chatborder hover:bg-content1-foreground hover:text-background transition-colors"
						onPress={() => onQuestionSelect(question)}
					>
						{question}
					</Button>
				))}
			</div>
		</div>
	);
};

export default SuggestedQuestions;
