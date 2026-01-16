import { policyData } from "@/components/data";
import { SectionTitle } from "@/components/modules";
import type { Metadata } from "next";
import { PageItem } from "./components";
import Link from "next/link";

export const metadata: Metadata = {
	metadataBase: new URL("https://websnooze.xyz"),
	title: "Politique de confidentiatlite | Websnooze",
	description:
		"Découvrez ma politique de confidentialité et de protection des données.",
	openGraph: {
		title: "Politique de confidentiatlite | Websnooze",
		description:
			"Découvrez ma politique de confidentialité et de protection des données.",
		url: "https://websnooze.xyz/politique-de-confidentiatlite",
		siteName: "Politique de confidentiatlite | Websnooze",
		images: [{ url: "/og.jpg", width: 1200, height: 630 }],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Politique de confidentiatlite | Websnooze",
		description:
			"Découvrez ma politique de confidentialité et de protection des données.",
		images: ["/twitter.jpg"],
	},
	icons: {
		icon: "/favicon.ico",
	},
	alternates: {
		canonical: "https://websnooze.xyz/politique-de-confidentiatlite",
	},
};

const Policy = () => {
	const data = policyData;

	return (
		<section
			id="section"
			className="mx-auto flex flex-col sm:px-4 gap-8 max-w-5xl mt-20"
		>
			<SectionTitle
				title="Confidentialité"
				subtitle="Politique de confidentialité"
			/>
			<div className="flex flex-col gap-14">
				{data.map((item) => (
					<PageItem key={item.id} {...item} />
				))}
			</div>
			<p className="text-default">
				Pour toute demande, vous pouvez me contacter à :{" "}
				<Link href="mailto:devsnooze@gmail.com" className="text-primary">
					devsnooze@gmail.com
				</Link>
			</p>
		</section>
	);
};

export default Policy;
