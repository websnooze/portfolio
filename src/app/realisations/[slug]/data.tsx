import { STRAPI_TOKEN, STRAPI_URL } from "@/lib/utils";
import { ProjetItemData, StrapiProjetItemResponse } from "./types";

export async function getProjetBySlug(
	slug: string
): Promise<ProjetItemData | null> {
	try {
		const response = await fetch(
			`${STRAPI_URL}/api/projets?filters[$and][0][slug][$eq]=${slug}&populate[header][fields][0]=url&populate[gallery][fields][0]=url&populate[frontend_technos][fields]=name,link,description&populate[backend_technos][fields]=name,link,description&populate[logiciel_technos][fields]=name,link,description`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${STRAPI_TOKEN}`,
				},
				next: {
					revalidate: false,
					tags: ["projetsId"],
				},
			}
		);

		if (!response.ok) {
			console.error(
				"Erreur lors de la récupération des projets:",
				response.statusText
			);
			throw new Error("Erreur lors de la récupération des projets");
		}

		const data: StrapiProjetItemResponse = await response.json();
		return data.data[0];
	} catch (error) {
		console.error("Erreur lors du fetch des projets:", error);
		throw error;
	}
}
