"use client";

import { ButtonMotion, CircularText } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
	return (
		<section className="container flex sm:flex-col items-center gap-16 overflow-x-hidden lg:pb-24 sm:pb-12 pt-8">
			<div className="relative sm:w-full w-1/2">
				<div className="h-full w-full overflow-hidden rounded-b-full">
					<Image
						src="/images/hero.png"
						className="aspect-3/4 h-full w-full object-cover transition duration-300 hover:scale-[1.015]"
						alt="Novata"
						priority
						width={400}
						height={600}
					/>
					<Link href="/contact">
						<div className="group bg-content2 absolute flex items-center justify-center right-0 bottom-0 aspect-square min-h-36 min-w-36 h-36 w-36 max-h-36 max-w-36 rounded-full shadow">
							<div className="flex items-center justify-center border-content3 min-h-[76px] min-w-[76px] h-[76px] w-[76px] max-h-[76px] max-w-[76px] rounded-full border">
								<ArrowUpRight className="w-5 h-5 stroke-current transition-all duration-300 group-hover:rotate-45" />
							</div>
							<div className="absolute inset-0 flex items-center justify-center">
								<CircularText
									spinDuration={10}
									onHover="slowDown"
									className="uppercase text-sm tracking-widest"
									text="Contactez nous • Contactez nous • "
								/>
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="w-full flex flex-col gap-6 items-start">
				<h1 className="text-balance text-7xl sm:text-5xl font-display max-w-4xl font-medium">
					<span className="text-primary">Agence web créative</span>, concepteur
					numérique
				</h1>
				<p className="text-balance text-default">
					Nous concevons des expériences numériques soignées, attrayantes et
					accessibles, qui produisent des résultats concrets et contribuent à
					atteindre les objectifs commerciaux.
				</p>
				<Link href="/contact">
					<ButtonMotion label="Contactez-nous" />
				</Link>
			</div>
		</section>
	);
};

export default AboutHero;
