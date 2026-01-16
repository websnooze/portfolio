import { ButtonMotion } from "@/components/motion";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
	return (
		<main className="relative flex w-full flex-col justify-center">
			<div className="flex h-full min-h-[80dvh] grow flex-col items-center justify-center gap-2 p-2">
				<div className="flex items-center font-display justify-center gap-1">
					<h1 className="text-9xl font-bold">4</h1>
					<div className="h-[120px] w-[120px]">
						<Image
							height={500}
							width={500}
							src="/images/thinking.png"
							alt="404"
							className="h-full w-full object-contain"
						/>
					</div>
					<h1 className="text-9xl font-bold">4</h1>
				</div>
				<p className="text-3xl font-bold text-foreground">
					Oups ! Page introuvable.
				</p>
				<p className="mb-2 text-center text-default font-medium">
					Nous n&apos;avons pas trouvé ce que vous recherchez. Veuillez vérifier
					l&apos;URL et réessayer !
				</p>
				<Link href="/">
					<ButtonMotion label="Retour à l'accueil" />
				</Link>
			</div>
		</main>
	);
};

export default NotFound;
