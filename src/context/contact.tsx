"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Reason =
	| "Site Vitrine"
	| "Site E-commerce"
	| "Application web ou mobile"
	| "UI/UX Design"
	| "Refonte / Optimisation"
	| "Demande de devis"
	| "Prendre un café"
	| "Autre demande"
	| null;

interface ContactContextType {
	selectedReason: Reason;
	setSelectedReason: (reason: Reason) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
	const [selectedReason, setSelectedReason] = useState<Reason>(null);

	return (
		<ContactContext.Provider value={{ selectedReason, setSelectedReason }}>
			{children}
		</ContactContext.Provider>
	);
}

export function useContact() {
	const context = useContext(ContactContext);
	if (context === undefined) {
		throw new Error("useContact must be used within a ContactProvider");
	}
	return context;
}
