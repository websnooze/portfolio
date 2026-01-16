export const navigationLd = [
	{
		"@context": "https://schema.org",
		"@type": "SiteNavigationElement",
		name: "Home",
		url: "https://websnooze.xyz/",
	},
	{
		"@context": "https://schema.org",
		"@type": "SiteNavigationElement",
		name: "Compétences",
		url: "https://websnooze.xyz/competences",
	},
	{
		"@context": "https://schema.org",
		"@type": "SiteNavigationElement",
		name: "Projets",
		url: "https://websnooze.xyz/projets",
	},
	{
		"@context": "https://schema.org",
		"@type": "SiteNavigationElement",
		name: "Contact",
		url: "https://websnooze.xyz/contact",
	},
];

export const pageLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Websnooze",
	url: "https://websnooze.xyz",
	sameAs: [
		"https://github.com/websnooze",
		"https://linkedin.com/in/mathias-lac-4629992b2",
	],
	jobTitle: "Agence web à Cahors",
	description:
		"développement fullstack spécialisé en React, Node.js et UI/UX design. Découvrez mon portfolio : projets modernes, applications performantes et solutions digitales.",
	image: "https://websnooze.xyz/og.jpg",
	founderOf: { "@type": "Organization", name: "Websnooze" },
	knowsAbout: [
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
		"Docker",
	],
	alumniOf: [
		{
			"@type": "EducationalOrganization",
			name: "OpenClassrooms",
			url: "https://openclassrooms.com/",
		},
	],
	hasOccupation: [
		{
			"@type": "Occupation",
			role: "Développeur React / Typescript",
			name: "Websnooze",
			skills: ["React", "TypeScript", "Next.js", "UI/UX Design"],
			yearsOfExperience: "2",
		},
	],
	nationality: "Français",
	address: {
		"@type": "PostalAddress",
		addressCountry: "France",
		addressState: "Lot",
		addressCity: "Cahors",
	},
};
