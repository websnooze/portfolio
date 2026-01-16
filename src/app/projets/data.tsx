import { STRAPI_TOKEN, STRAPI_URL } from "@/lib/utils";
import { ProjetData, StrapiProjetResponse } from "./types";

export async function getAllProjets(): Promise<ProjetData[]> {
	try {
		const response = await fetch(
			`${STRAPI_URL}/api/projets?fields[0]=title&fields[1]=slug&fields[2]=date&fields[3]=role&populate[thumbnail][fields][0]=url&sort[0]=date:desc`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${STRAPI_TOKEN}`,
				},
				next: {
					revalidate: false,
					tags: ["projets"],
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

		const data: StrapiProjetResponse = await response.json();
		return data.data || [];
	} catch (error) {
		console.error("Erreur lors du fetch des projets:", error);
		return [];
	}
}
