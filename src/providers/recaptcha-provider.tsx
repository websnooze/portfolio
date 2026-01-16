"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";
import { RECAPTCHA_SITE_KEY } from "@/lib/utils";

interface ReCaptchaProviderProps {
	children: ReactNode;
}

export default function ReCaptchaProvider({
	children,
}: ReCaptchaProviderProps) {
	if (!RECAPTCHA_SITE_KEY) {
		console.warn("⚠️ reCAPTCHA site key is missing");
		return <>{children}</>;
	}

	return (
		<GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
			{children}
		</GoogleReCaptchaProvider>
	);
}
