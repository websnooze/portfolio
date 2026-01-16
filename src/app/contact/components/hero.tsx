"use client";

import { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { SectionTitle } from "../../../components/modules";
import { ButtonMotion } from "../../../components/motion";
import {
	Avatar,
	Form,
	Input,
	Select,
	SelectItem,
	Textarea,
} from "@heroui/react";
import Link from "next/link";
import { reasonsData, socialsData } from "../../../components/data";
import { AnimatePresence, motion } from "motion/react";
import SentSuccess from "./sent-success";
import { handleConfetti } from "../../../components/functions/confettis";
import { useContact } from "@/context/contact";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type ContactFormInputs = {
	name: string;
	telephone: string;
	email: string;
	reason: string;
	message: string;
};

const ContactHero = () => {
	const { selectedReason, setSelectedReason } = useContact();
	const [submitted, setSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const { executeRecaptcha } = useGoogleReCaptcha();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormInputs>();

	// Ajouter l'attribut data-lenis-prevent aux popovers HeroUI
	useEffect(() => {
		const observer = new MutationObserver(() => {
			const popovers = document.querySelectorAll('[data-slot="content"]');
			popovers.forEach((popover) => {
				if (!popover.hasAttribute("data-lenis-prevent")) {
					popover.setAttribute("data-lenis-prevent", "");
				}
			});
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});

		return () => observer.disconnect();
	}, []);

	const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
		setIsLoading(true);
		setError(null);
		setSubmitted(false);

		try {
			// Vérifier si reCAPTCHA est disponible
			if (!executeRecaptcha) {
				setError("reCAPTCHA n'est pas encore chargé. Veuillez réessayer.");
				setIsLoading(false);
				return;
			}

			const recaptchaToken = await executeRecaptcha("contact_form");

			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...data,
					recaptchaToken,
				}),
			});

			if (response.ok) {
				setSubmitted(true);
				reset();
				handleConfetti();

				setTimeout(() => {
					setSubmitted(false);
				}, 5_000);
			} else {
				try {
					const errorData = await response.json();
					console.log("Error data:", errorData);

					let errorMessage =
						"Une erreur est survenue lors de l'envoi du message.";

					if (errorData.error) {
						if (typeof errorData.error === "string") {
							errorMessage = errorData.error;
						} else {
							errorMessage = `Erreur: ${JSON.stringify(errorData.error)}`;
						}
					} else if (errorData.receiverError) {
						errorMessage = `Erreur de confirmation: ${errorData.receiverError}`;
					}

					setError(errorMessage);
				} catch {
					setError(`Erreur ${response.status}: ${response.statusText}`);
				}
			}
		} catch {
			setError("Erreur de réseau. Veuillez réessayer plus tard.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AnimatePresence mode="wait">
			{submitted ? (
				<SentSuccess />
			) : (
				<motion.section
					initial={false}
					id="section"
					className="container flex flex-col gap-4"
				>
					<div className="max-w-xl">
						<SectionTitle
							title="Me contacter"
							subtitle="Lançons un projet ensemble"
						/>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
						<Form
							className="flex flex-col gap-4 items-start"
							onSubmit={handleSubmit(onSubmit)}
						>
							<Input
								classNames={{
									inputWrapper: "h-11 border-1 border-content3",
									label: "text-sm",
								}}
								labelPlacement="outside-top"
								type="text"
								{...register("name", {
									required: "Le nom est requis",
									minLength: {
										value: 2,
										message: "Le nom doit contenir au moins 2 caractères",
									},
								})}
								variant="bordered"
								label="Nom"
								isInvalid={!!errors.name}
								errorMessage={errors.name?.message}
								isDisabled={isLoading}
							/>
							<Input
								classNames={{
									inputWrapper: "h-11 border-1 border-content3",
									label: "text-sm",
								}}
								labelPlacement="outside-top"
								type="tel"
								{...register("telephone", {
									required: "Le numéro de téléphone est requis",
									pattern: {
										value: /^[0-9]*$/,
										message:
											"Le numéro de téléphone doit contenir uniquement des chiffres",
									},
									minLength: {
										value: 10,
										message:
											"Le numéro de téléphone doit contenir au moins 10 chiffres",
									},
									maxLength: {
										value: 10,
										message:
											"Le numéro de téléphone doit contenir maximum 10 chiffres",
									},
									validate: (value) => {
										if (value.length !== 10) {
											return "Le numéro de téléphone doit contenir 10 chiffres";
										}
										return true;
									},
								})}
								variant="bordered"
								label="Numéro de téléphone"
								isInvalid={!!errors.telephone}
								errorMessage={errors.telephone?.message}
								isDisabled={isLoading}
							/>
							<Input
								classNames={{
									inputWrapper: "h-11 border-1 border-content3",
									label: "text-sm",
								}}
								labelPlacement="outside-top"
								type="email"
								{...register("email", {
									required: "L'email est requis",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Adresse email invalide",
									},
								})}
								variant="bordered"
								label="Email"
								isInvalid={!!errors.email}
								errorMessage={errors.email?.message}
								isDisabled={isLoading}
							/>
							<Select
								label="Raison"
								labelPlacement="outside"
								disallowEmptySelection
								classNames={{
									value:
										"text-content1-foreground group-data-[has-value=true]:text-content1-foreground",
									trigger:
										"h-11 border-1 cursor-pointer border-content3 bg-background data-[hover=true]:bg-background data-[hover=true]:border-default-400",
									label: "text-sm relative top-0 pb-2",
								}}
								popoverProps={{
									classNames: {
										content: "max-h-64 overflow-y-auto",
									},
								}}
								listboxProps={{
									itemClasses: {
										base: "data-[hover=true]:bg-default-100",
									},
								}}
								defaultSelectedKeys={
									selectedReason ? [selectedReason] : ["Site Vitrine"]
								}
								onSelectionChange={(keys) => {
									const value = Array.from(keys)[0] as string;
									setSelectedReason(
										value as
											| "Site Vitrine"
											| "Site E-commerce"
											| "Application web ou mobile"
											| "UI/UX Design"
											| "Refonte / Optimisation"
											| "Demande de devis"
											| "Prendre un café"
											| "Autre demande"
									);
								}}
								{...register("reason", {
									required: "La raison est requise",
								})}
							>
								{reasonsData.map((item) => (
									<SelectItem key={item.key}>{item.label}</SelectItem>
								))}
							</Select>
							<Textarea
								classNames={{
									inputWrapper: "border-1 border-content3 min-h-[100px] py-2",
									label: "text-sm",
								}}
								labelPlacement="outside-top"
								variant="bordered"
								{...register("message", {
									required: "Le message est requis",
									minLength: {
										value: 10,
										message: "Le message doit contenir au moins 10 caractères",
									},
								})}
								label="Message"
								isInvalid={!!errors.message}
								errorMessage={errors.message?.message}
								isDisabled={isLoading}
							/>
							<div className="flex justify-start">
								<ButtonMotion
									type="submit"
									label={isLoading ? "Envoi en cours..." : "Envoyer"}
									disabled={isLoading}
								/>
							</div>

							{/* Messages de statut */}
							{submitted && (
								<div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
									✅ Message envoyé avec succès ! Nous vous répondrons dans les
									plus brefs délais.
								</div>
							)}

							{error && (
								<div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
									❌ {String(error)}
								</div>
							)}
						</Form>
						<div className="bg-content2 w-full h-min rounded-3xl p-6 shadow">
							<div className="items-center mb-6 flex h-fit gap-2 rounded-full bg-[#B5FF6D]/10 px-4 py-2 w-fit">
								<span className="relative flex h-[6px] w-[6px]">
									<span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
									<span className="bg-primary relative inline-flex h-full w-full rounded-full" />
								</span>
								<p className="text-content1-foreground font-medium text-xs">
									Disponible
								</p>
							</div>
							<Avatar
								radius="full"
								isBordered
								className="w-20 h-20 text-large"
								src="/images/avatar.png"
							/>
							<p className="mt-6 mb-6 text-default">
								Ma boîte de réception est toujours ouverte, que vous ayez un
								projet ou que vous souhaitiez simplement me dire bonjour. Je
								serai ravis d&apos;avoir de vos nouvelles. N&apos;hésitez pas à
								me contacter, je vous répondrai dans les plus brefs délais.
							</p>
							<div className="flex items-center opacity-container text-default gap-6">
								{socialsData.map((item) => (
									<Link
										key={item.id}
										href={item.link}
										target="_blank"
										aria-label={item.label}
										rel="noopener noreferrer"
									>
										<item.icon className="text-default" />
									</Link>
								))}
							</div>
						</div>
					</div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default ContactHero;
