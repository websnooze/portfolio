export interface ProjetItemData {
	id: string;
	title: string;
	description: string;
	slug: string;
	date: string;
	role: string;
	url: string;
	client: string;
	features: string;
	thumbnail: {
		url: string;
	};
	header: {
		url: string;
	};
	gallery: {
		url: string;
	}[];
	frontend_technos: {
		name: string;
		link: string;
		description: string;
	}[];
	backend_technos: {
		name: string;
		link: string;
		description: string;
	}[];
	logiciel_technos: {
		name: string;
		link: string;
		description: string;
	}[];
}

export interface StrapiProjetItemResponse {
	data: ProjetItemData[];
}
