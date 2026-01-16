export const navigationLd = [
	{
		"@context": "https://schema.org",
		"@type": "SiteNavigationElement",
		"name": "Home",
		"url": "https://novata.fr/"
	},
	{
		"@context": "https://schema.org",
		"@type": "SiteNavigationElement",
		"name": "Services",
		"url": "https://novata.fr/services"
	},
	{
		"@context": "https://schema.org",
		"@type": "SiteNavigationElement",
		"name": "Réalisations",
		"url": "https://novata.fr/realisations"
	},
	{
		"@context": "https://schema.org",
		"@type": "SiteNavigationElement",
		"name": "Contact",
		"url": "https://novata.fr/contact"
	}
]

export const pageLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Novata",
    "url": "https://novata.fr",
    "sameAs": [
        "https://github.com/novata",
        "https://www.linkedin.com/company/agencenovata",
    ],
    "jobTitle": "Agence web à Cahors",
    "description": "développement fullstack spécialisé en React, Node.js et UI/UX design. Découvrez mon portfolio : projets modernes, applications performantes et solutions digitales.",
    "image": "https://novata.fr/og.jpg",
    "founderOf": { "@type": "Organization", "name": "Novata" },
    "knowsAbout": [
        "Développement web",
        "UI/UX Design",
        "Web Development",
        "Développement Frontend",
        "React.js",
        "Node.js",
        "Next.js",
        "Bun",
        "Hono",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "Git",
        "Docker"
    ],
    "alumniOf": [
        {
            "@type": "EducationalOrganization",
            "name": "OpenClassrooms",
            "url": "https://openclassrooms.com/"
        }
    ],
    "hasOccupation": [
        {
            "@type": "Occupation",
            "role": "Agence web à Cahors",
            "name": "Novata",
            "skills": ["React", "TypeScript", "Next.js", "UI/UX Design"],
            "yearsOfExperience": "2"
        }
    ],
    "nationality": "Français",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "France",
        "addressState": "Lot",
        "addressCity": "Cahors"
    }
}