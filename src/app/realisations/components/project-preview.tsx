import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/fr";

dayjs.locale("fr");

const ProjectPreview = ({
	thumbnail,
	title,
	type,
	date,
	slug,
}: {
	thumbnail: string;
	title: string;
	type: string;
	date: string;
	slug: string;
}) => {
	// Couleurs pastels pour le fond
	const pastelColors = [
		"bg-pink-100",
		"bg-blue-100",
		"bg-green-100",
		"bg-yellow-100",
		"bg-purple-100",
		"bg-orange-100",
		"bg-teal-100",
		"bg-indigo-100",
		"bg-rose-100",
		"bg-cyan-100",
	];

	// Sélection aléatoire d'une couleur pastel
	const randomPastelColor =
		pastelColors[Math.floor(Math.random() * pastelColors.length)];

	return (
		<div className="opacity-container-child group h-fit w-full cursor-pointer lg:even:mt-14">
			<Link href={`/realisations/${slug}`} className="h-fit w-full">
				<div
					className={`aspect-3/2 w-full overflow-hidden rounded-3xl ${randomPastelColor}`}
				>
					<Image
						src={thumbnail}
						alt={title}
						width={600}
						height={400}
						className="aspect-3/2 w-full object-cover transition duration-300 group-hover:scale-[1.015]"
					/>
				</div>
				<div className="mt-4 space-y-2">
					<h3 className="text-xl font-medium">{title}</h3>
					<div className="flex justify-between">
						<div className="flex flex-wrap gap-2">
							<p className="text-sm text-default">{type}</p>
						</div>
						<p className="text-sm text-default">{dayjs(date).format("YYYY")}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProjectPreview;
