import {
	Atom,
	BrainCircuit,
	BriefcaseBusiness,
	CodeXml,
	Globe,
	House,
	Layout,
	PencilRuler,
	Puzzle,
	Rocket,
	Send,
	ServerCog,
	Settings,
	TabletSmartphone,
	TerminalSquare,
} from "lucide-react";
import { Github, Linkedin, Mail } from "../icons";

export const navigationData = [
	{
		id: 1,
		icon: House,
		label: "Accueil",
		link: "/",
	},
	{
		id: 2,
		icon: BriefcaseBusiness,
		label: "Compétences",
		link: "/competences",
	},
	{
		id: 3,
		icon: PencilRuler,
		label: "Projets",
		link: "/projets",
	},
	{
		id: 4,
		icon: Send,
		label: "Contact",
		link: "/contact",
	},
];

export const reasonsData = [
	{
		key: "Site Vitrine",
		label: "Site vitrine",
	},
	{
		key: "Site E-commerce",
		label: "Site E-commerce",
	},
	{
		key: "Application web ou mobile",
		label: "Application web ou mobile",
	},
	{
		key: "UI/UX Design",
		label: "UI/UX Design",
	},
	{
		key: "Refonte / Optimisation",
		label: "Refonte / Optimisation",
	},
	{
		key: "Demande de devis",
		label: "Demande de devis",
	},
	{
		key: "Prendre un café",
		label: "Prendre un café",
	},
	{
		key: "Autre demande",
		label: "Autre demande",
	},
];

export const socialsData = [
	{
		id: 1,
		label: "Linkedin",
		icon: Linkedin,
		target: "_blank",
		link: "https://www.linkedin.com/company/mathiaslac",
	},
	{
		id: 2,
		label: "Github",
		icon: Github,
		target: "_blank",
		link: "https://github.com/websnooze",
	},
	{
		id: 4,
		label: "Contact",
		icon: Mail,
		link: "/contact",
	},
];

export const homeMarqueeData = [
	{
		id: 1,
		label: "Sites vitrines",
	},
	{
		id: 2,
		label: "E-commerce",
	},
	{
		id: 3,
		label: "Applications",
	},
	{
		id: 4,
		label: "Mobile",
	},
	{
		id: 5,
		label: "UI/UX Design",
	},
	{
		id: 6,
		label: "Branding",
	},
	{
		id: 7,
		label: "Développement",
	},
];

export const accordionsImages = [
	{
		id: 1,
		key: "1",
		src: "/images/development.avif",
		alt: "Development",
	},
	{
		id: 2,
		key: "2",
		src: "/images/designing.avif",
		alt: "UI/UX Design",
	},
	{
		id: 3,
		key: "3",
		src: "/images/branding.avif",
		alt: "Branding",
	},
];

export const technosData = [
	{
		id: 1,
		label: "React.js",
		img: "/images/skills/React.png",
		alt: "Icone de React.js",
	},
	{
		id: 2,
		label: "Next.js",
		img: "/images/skills/Next.png",
		alt: "Icone de Next.js",
	},
	{
		id: 3,
		label: "TailwindCSS",
		img: "/images/skills/TailwindCSS.png",
		alt: "Icone de TailwindCSS",
	},
	{
		id: 4,
		label: "JavaScript",
		img: "/images/skills/JavaScript.png",
		alt: "Icone de JavaScript",
	},
	{
		id: 5,
		label: "TypeScript",
		img: "/images/skills/TypeScript.png",
		alt: "Icone de TypeScript",
	},
	{
		id: 6,
		label: "HTML",
		img: "/images/skills/HTML.png",
		alt: "Icone de HTML",
	},
	{
		id: 7,
		label: "CSS",
		img: "/images/skills/CSS.png",
		alt: "Icone de CSS",
	},
	{
		id: 8,
		label: "Node.js",
		img: "/images/skills/Node.png",
		alt: "Icone de Node.js",
	},
	{
		id: 9,
		label: "Express.js",
		img: "/images/skills/Express.png",
		alt: "Icone de Express.js",
	},
	{
		id: 10,
		label: "MongoDB",
		img: "/images/skills/MongoDB.png",
		alt: "Icone de MongoDB",
	},
	{
		id: 11,
		label: "PostgreSQL",
		img: "/images/skills/PostgreSQL.png",
		alt: "Icone de PostgreSQL",
	},
	{
		id: 12,
		label: "MySQL",
		img: "/images/skills/MySQL.png",
		alt: "Icone de MySQL",
	},
	{
		id: 13,
		label: "Git",
		img: "/images/skills/GIT.png",
		alt: "Icone de Git",
	},
	{
		id: 14,
		label: "GSAP",
		img: "/images/skills/GSAP.png",
		alt: "Icone de GSAP",
	},
	{
		id: 15,
		label: "Docker",
		img: "/images/skills/Docker.png",
		alt: "Icone de Docker",
	},
	{
		id: 16,
		label: "Firebase",
		img: "/images/skills/Firebase.png",
		alt: "Icone de Firebase",
	},
	{
		id: 17,
		label: "Framer Motion",
		img: "/images/skills/FramerMotion.png",
		alt: "Icone de Framer Motion",
	},
	{
		id: 18,
		label: "Bun",
		img: "/images/skills/Bun.png",
		alt: "Icone de Bun",
	},
	{
		id: 19,
		label: "Vite",
		img: "/images/skills/Vite.png",
		alt: "Icone de Vite",
	},
	{
		id: 20,
		label: "Hono",
		img: "/images/skills/Hono.png",
		alt: "Icone de Hono",
	},
];

export const stepsData = [
	{
		id: 1,
		icon: BrainCircuit,
		title: "01. Stratégie",
		description:
			"Définir le concept et la vision globale du projet pour répondre aux besoins.",
	},
	{
		id: 2,
		icon: Layout,
		title: "02. Maquette",
		description:
			"Créer des wireframes et prototypes interactifs pour tester l’expérience utilisateur.",
	},
	{
		id: 3,
		icon: PencilRuler,
		title: "03. Design",
		description:
			"Définir le style, les couleurs et construire un design system cohérent.",
	},
	{
		id: 4,
		icon: CodeXml,
		title: "04. Développement",
		description:
			"Transformer les maquettes en une application fonctionnelle et modulable.",
	},
	{
		id: 5,
		icon: Rocket,
		title: "05. Lancement",
		description:
			"Optimiser les performances, l’accessibilité et la sécurité du site web.",
	},
];

export const pilarsData = [
	{
		id: 1,
		icon: Globe,
		title: "Création de sites web",
		description:
			"Des sites modernes, rapides et évolutifs, pensés pour refléter votre image et atteindre vos objectifs en ligne.",
	},
	{
		id: 2,
		icon: TabletSmartphone,
		title: "Applications Web",
		description:
			"Des applications performantes et intuitives, conçues avec React et/ou Next et Typescript pour offrir une expérience fluide.",
	},
	{
		id: 3,
		icon: PencilRuler,
		title: "UI/UX Design",
		description:
			"Des interfaces élégantes et cohérentes, centrées sur l’humain, pour une navigation claire et mémorable sur tous les supports.",
	},
	{
		id: 4,
		icon: Settings,
		title: "Optimisations",
		description:
			"Un suivi continu pour garantir performance, sécurité et évolutivité, afin de faire durer vos projets dans le temps.",
	},
];

export const pricesData = [
	{
		id: 1,
		title: "Site vitrine",
		key: "Site Vitrine",
		titleColor: "text-primary",
		background: "bg-content2 border-1 border-primary",
		price: 700,
		devis: false,
		duration: "2 à 3 semaines",
		description:
			"Idéal pour présenter votre activité, vos services et vos contacts.",
		features: [
			"Design sur mesure",
			"1 à 5 pages optimisées",
			"Formulaire de contact",
			"Maintenance technique offerte 1 mois",
		],
	},
	{
		id: 2,
		title: "Site E-Commerce",
		key: "Site E-commerce",
		titleColor: "text-foreground",
		background: "bg-content2/60 border-1 border-content1",
		price: 1500,
		devis: false,
		duration: "3 à 5 semaines",
		description:
			"Pour vendre vos produits en ligne facilement, avec un solution clé en main.",
		features: [
			"Catalogue produits",
			"Gestion des commandes",
			"Paiement sécurisé (Stripe / Mollie)",
			"Backoffice complet",
		],
	},
	{
		id: 3,
		title: "Application web ou mobile",
		key: "Application web ou mobile",
		titleColor: "text-foreground",
		background: "bg-content2/40 border-1 border-content1",
		price: 2000,
		devis: true,
		duration: "Selon la complexité",
		description:
			"Application sur mesure : tableau de bord, interface client, ou app mobile React Native.",
		features: [
			"Conception UX/UI",
			"Développement complet (frontend + backend)",
			"Intégration d’API / base de données",
			"Suivi technique",
		],
	},
];

export const communityData = {
	title: "Travail communautaire",
	subtitle: "Spown.dev, Community Builder",
	description:
		"J’ai créé Spown.dev pour moderniser les outils de création de sites de la communauté Counter-Strike, jusque-là limités à des systèmes vieillissants. J’ai repensé le concept de zéro avec ReactJS, Tailwind, Module Federation et une API en PHP Vanilla, afin qu’il soit compatible même avec les hébergeurs les plus basiques, tout en permettant d’ajouter des modules sans reconstruire le cœur de l’application. Pour aller plus loin, j’ai conçu un Design System et un CLI offrant aux développeurs la possibilité de créer et intégrer leurs propres modules en un instant.",
	button: {
		label: "Rejoindre la communauté",
		link: "https://discord.gg/spowndev",
	},
	values: [
		{
			id: 1,
			value: 12,
			prefix: "",
			text: "Modules créés",
		},
		{
			id: 2,
			value: 35,
			prefix: "+",
			text: "Communautés concernées",
		},
		{
			id: 3,
			value: 1,
			prefix: " an",
			text: "de développement",
		},
	],
	grid: [
		{
			id: 1,
			icon: Atom,
			title: "Technologie moderne",
			description:
				"Conçu avec React, Tailwind et Module Federation pour plus de fluidité.",
		},
		{
			id: 2,
			icon: ServerCog,
			title: "Hébergement flexible",
			description:
				"Fonctionne même sur un hébergeur basique sans perte de performance.",
		},
		{
			id: 3,
			icon: Puzzle,
			title: "Plug & Play",
			description:
				"Ajoutez des modules en un clic sans jamais reconstruire l’application.",
		},
		{
			id: 4,
			icon: TerminalSquare,
			title: "Outils développeurs",
			description:
				"Un CLI et un Design System inspiré de HeroUI pour créer des modules rapidement.",
		},
	],
};

export const awardsData = [
	{
		id: 1,
		title: "Développeur Web - OpenClassrooms",
		date: "Nov 2024",
	},
	{
		id: 2,
		title: "Technicien du son - FormatSon Toulouse",
		date: "Juin 2020",
	},
];

export const mentionsLegalesData = {
	infos: [
		{
			id: 1,
			label: "Nom",
			value: "Websnooze",
		},
		{
			id: 2,
			label: "Statut",
			value: "Micro Entreprise",
		},
		{
			id: 3,
			label: "Numéro SIRET",
			value: "940 088 933 00012",
		},
		{
			id: 4,
			label: "Adresse",
			value: "46000 Cahors, Lot, France",
		},
		{
			id: 5,
			label: "Email",
			value: "devsnooze@gmail.com",
		},
	],
	respPub: "Mathias Lac",
	hosting: {
		name: "Hetzner Online GmbH",
		address: "Industriestr. 25, 91710 Gunzenhausen, Allemagne",
		website: {
			link: "https://www.hetzner.com",
			label: "www.hetzner.com",
		},
	},
	propIntel:
		"L'ensemble des contenus (textes, images, graphismes, logo, code) présentés sur ce  site, sont la propriété exclusive de Websnooze sauf mention contraire. Toute reproduction, même partielle, est interdite sans accord préalable.",
};

export const policyData = [
	{
		id: 1,
		label: "Formulaire de contact",
		content:
			"Les informations saisies dans le formulaire de contact (nom, prénom, adresse email, message) sont transmises uniquement par email à <strong className='font-semibold'>devsnooze@gmail.com</strong>. Elles ne sont pas stockées dans une base de données et ne font l’objet d’aucune autre utilisation que le traitement de votre demande.",
		list: null,
	},
	{
		id: 2,
		label: "Hébergement et sécurité",
		content:
			"Le site est hébergé par <strong className='font-semibold'>Hetzner Online GmbH</strong> et utilise également <strong className='font-semibold'>Cloudflare</strong> comme CDN afin d’améliorer les performances et la sécurité. Cela peut impliquer un enregistrement temporaire de certaines informations techniques (adresses IP, logs de connexion).",
		list: null,
	},
	{
		id: 3,
		label: "Statistiques et mesure d’audience",
		content:
			"Ce site utilise <strong className='font-semibold'>Umami Analytics</strong>, une solution respectueuse de la vie privée.",
		list: [
			"Aucun cookie n’est déposé.",
			"Aucune donnée personnelle identifiable n’est collectée.",
			"Les statistiques servent uniquement à analyser l’utilisation du site (pages visitées, durée de visite, type d’appareil).",
		],
	},
	{
		id: 4,
		label: "Vos droits (RGPD)",
		content:
			"Conformément au <strong className='font-semibold'>Règlement Général sur la Protection des Données (RGPD)</strong>, vous disposez des droits suivants :",
		list: [
			"Droit d’accès, de rectification et d’effacement des données vous concernant.",
			"Droit à la limitation et à l’opposition au traitement.",
		],
	},
];
