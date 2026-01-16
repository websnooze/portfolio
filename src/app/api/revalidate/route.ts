import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Tags disponibles pour la revalidation
const AVAILABLE_TAGS = [
	"testimonials",
	"avis",
	"brands",
	"models",
	"options",
	"partners",
	"partenaires",
	"prix",
	"prices",
	// Ajoutez vos tags ici au fur et à mesure
] as const;

// Fonction commune pour gérer la revalidation
async function handleRevalidation(request: NextRequest) {
	// Vérifier le token de sécurité pour s'assurer que seul le Cron Job peut appeler cette route
	const authHeader = request.headers.get("authorization");
	const token = process.env.CRON_SECRET;

	if (!token || authHeader !== `Bearer ${token}`) {
		return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
	}

	// Récupérer le(s) tag(s) depuis l'URL (GET/POST) ou le body (POST)
	let tags: string[] = [];
	
	// Fonction helper pour extraire les tags depuis les query params
	const getTagsFromQueryParams = () => {
		const searchParams = request.nextUrl.searchParams;
		const singleTag = searchParams.get("tag");
		const multipleTags = searchParams.get("tags");
		
		if (singleTag) {
			return [singleTag];
		} else if (multipleTags) {
			// Support format: ?tags=testimonials,partners,prix
			return multipleTags.split(",").map(t => t.trim()).filter(Boolean);
		}
		return [];
	};
	
	if (request.method === "GET") {
		tags = getTagsFromQueryParams();
	} else if (request.method === "POST") {
		// Pour POST, essayer d'abord le body, puis les query params en fallback
		try {
			const body = await request.json();
			
			// Support pour un seul tag
			if (body.tag) {
				tags = [body.tag];
			}
			// Support pour plusieurs tags (array)
			else if (body.tags && Array.isArray(body.tags)) {
				tags = body.tags;
			}
			// Support pour plusieurs tags (string séparée par virgules)
			else if (body.tags && typeof body.tags === "string") {
				tags = body.tags.split(",").map((t: string) => t.trim()).filter(Boolean);
			}
		} catch {
			// Body vide ou invalide, on continue
		}
		
		// Si aucun tag trouvé dans le body, vérifier les query params
		if (tags.length === 0) {
			tags = getTagsFromQueryParams();
		}
	}

	if (tags.length === 0) {
		return NextResponse.json(
			{
				error: "Le paramètre 'tag' ou 'tags' est requis",
				availableTags: AVAILABLE_TAGS,
				examples: {
					GET_single: "/api/revalidate?tag=testimonials",
					GET_multiple: "/api/revalidate?tags=testimonials,partners,prix",
					POST_single: 'POST /api/revalidate avec body: {"tag": "testimonials"}',
					POST_multiple_array: 'POST /api/revalidate avec body: {"tags": ["testimonials", "partners", "prix"]}',
					POST_multiple_string: 'POST /api/revalidate avec body: {"tags": "testimonials,partners,prix"}',
				},
			},
			{ status: 400 }
		);
	}

	// Vérifier que tous les tags sont dans la liste autorisée
	const invalidTags = tags.filter(
		tag => !AVAILABLE_TAGS.includes(tag as (typeof AVAILABLE_TAGS)[number])
	);

	if (invalidTags.length > 0) {
		return NextResponse.json(
			{
				error: `Tag(s) non reconnu(s): ${invalidTags.join(", ")}`,
				availableTags: AVAILABLE_TAGS,
			},
			{ status: 400 }
		);
	}

	try {
		// Revalider tous les tags spécifiés
		const results = [];
		
		for (const tag of tags) {
			revalidateTag(tag);
			results.push(tag);
		}

		return NextResponse.json({
			success: true,
			message: `Cache revalidé avec succès pour ${tags.length} tag(s)`,
			tags: results,
			count: results.length,
			method: "revalidateTag (revalidation ciblée)",
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error(`Erreur lors de la revalidation des tags:`, error);
		return NextResponse.json(
			{
				error: "Erreur lors de la revalidation du cache",
				tags: tags,
			},
			{ status: 500 }
		);
	}
}

// Exporter la méthode GET
export async function GET(request: NextRequest) {
	return handleRevalidation(request);
}

// Exporter la méthode POST
export async function POST(request: NextRequest) {
	return handleRevalidation(request);
}