import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://websnooze.xyz";

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [
				"/api/*",
				"/mentions-legales",
				"/politique-de-confidentialite",
			],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
