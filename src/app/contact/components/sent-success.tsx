"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const SentSuccess = () => {
	return (
		<motion.section
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.2, ease: "easeInOut" }}
			id="section"
			className="container flex flex-col gap-4 items-center justify-center my-54"
		>
			<div className="flex items-center sm:flex-col sm:justify-center gap-4 sm:-mt-10">
				<ShieldCheck className="w-12 h-12 text-primary" />
				<h1 className="text-5xl sm:text-3xl font-semibold font-display sm:text-center">
					Message envoyé
				</h1>
			</div>
			<div className="flex flex-col gap-4 text-center">
				<p className="max-w-md text-default">
					Votre message a bien été envoyé. Je vous répondrai dans les plus brefs
					délais.
				</p>
			</div>
		</motion.section>
	);
};

export default SentSuccess;
