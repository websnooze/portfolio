import LetterReveal from "@/components/motion/letter-reveal";
import ShinyText from "../motion/shiny-text";
import { Sparkle } from "lucide-react";

const HomeAbout = () => {
	return (
		<section id="section" className="container flex flex-col items-center">
			<div className="mb-4 flex w-fit items-center gap-2 text-primary">
				<Sparkle className="w-[18px] h-[18px] text-primary" />
				<ShinyText
					className="word-spacing font-display text-sm uppercase font-medium leading-none text-primary"
					text="Un peu d'infos"
					speed={1}
				/>
			</div>
			<LetterReveal
				className="flex flex-wrap text-center lg:leading-11 justify-center font-sans text-content1-foreground font-medium tracking-wide lg:text-[2rem] sm:text-2xl"
				text="Novata est une agence web indépendante animée par l’envie de donner vie à des idées ambitieuses. Chaque projet est pour nous l’occasion de créer une expérience digitale unique, à la fois esthétique, fluide et centrée sur l’utilisateur. Grâce à des collaborations variées, allant de jeunes marques à des projets confidentiels, nous avons affûté notre savoir-faire pour transformer une vision en produit concret, performant et durable."
			/>
			<p className="sr-only">
				Novata est une agence web indépendante animée par l&apos;envie de donner
				vie à des idées ambitieuses. Chaque projet est pour nous l&apos;occasion
				de créer une expérience digitale unique, à la fois esthétique, fluide et
				centrée sur l&apos;utilisateur. Grâce à des collaborations variées,
				allant de jeunes marques à des projets confidentiels, nous avons affûté
				notre savoir-faire pour transformer une vision en produit concret,
				performant et durable.
			</p>
		</section>
	);
};

export default HomeAbout;
