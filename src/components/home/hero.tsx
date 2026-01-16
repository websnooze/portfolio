"use client";

import { ArrowUpRight, Hand } from "lucide-react";
import { socialsData } from "../data";
import Link from "next/link";
import { ButtonMotion } from "@/components/motion";

const HomeHero = () => {
	return (
		<section id="section" className="flex flex-col w-full container">
			<p className="mb-8 flex items-center gap-2">
				<span className="waveanimation">
					<Hand className="w-6 h-6 text-primary" />
				</span>
				Bonjour! Je suis Websnooze
			</p>
			<h1 className="font-display text-[3rem] font-medium leading-none text-pretty md:text-6xl lg:w-3/4 lg:text-7xl">
				Concevoir des{" "}
				<span className="text-primary">expériences qui inspirent</span> &
				suscitent l&apos;engagement.
			</h1>
			<div className="flex sm:flex-col items-center mt-8 gap-4">
				<div className="bg-content1 h-px w-full" />
				<p className="w-full text-pretty text-default">
					Je conçois des expériences numériques soignées, attrayantes et
					accessibles, qui produisent des résultats concrets et contribuent à
					atteindre les objectifs commerciaux.
				</p>
			</div>
			<div className="mt-8 flex sm:flex-col lg:justify-between gap-4 lg:items-center">
				<ul className="opacity-container flex h-fit gap-4 sm:hidden">
					{socialsData.map((item) => (
						<li className="opacity-container-child h-fit" key={item.id}>
							<Link
								className="flex items-center text-default gap-2 text-sm uppercase transition"
								href={item.link}
								target={item.target}
							>
								{item.label}
								<ArrowUpRight className="w-4 h-4" />
							</Link>
						</li>
					))}
				</ul>
				<Link href="/services" className="sm:w-full sm:flex sm:items-start">
					<ButtonMotion label="Mieux me connaître" />
				</Link>
			</div>
		</section>
	);
};

export default HomeHero;
