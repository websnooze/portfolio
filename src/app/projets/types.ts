export interface ProjetData {
	id: string;
	title: string;
	slug: string;
	date: string;
	role: string;
	thumbnail: {
		url: string;
	};
}

export interface StrapiProjetResponse {
	data: ProjetData[];
}
