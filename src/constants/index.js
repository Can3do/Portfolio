import {
	FaHtml5,
	FaReact,
	FaGitAlt,
	FaCss3,
	FaFigma,
	FaGithub,
} from 'react-icons/fa6';

import {
	SiTailwindcss,
	SiNextdotjs,
	SiJavascript,
	SiTypescript,
	SiShadcnui,
} from 'react-icons/si';

export const navLinks = [
	{
		name: 'Inicio',
		url: '#home',
		id: 'home',
	},
	{
		name: 'Proyectos',
		url: '#projects',
		id: 'projects',
	},
	{
		name: 'Acerca de mí',
		url: '#about',
		id: 'about',
	},
	{
		name: 'Tecnologías',
		url: '#tech',
		id: 'tech',
	},
	{
		name: 'Contacto',
		url: '#contact',
		id: 'contact',
	},
];

export const technologies = [
	{
		name: 'HTML 5',
		icon: FaHtml5,
		color: '#f06529',
	},
	{
		name: 'CSS 3',
		icon: FaCss3,
		color: '#2965f1',
	},
	{
		name: 'Tailwind',
		icon: SiTailwindcss,
		color: '#36b7f0',
	},
	{
		name: 'Javascipt',
		icon: SiJavascript,
		color: '#f0dc55',
	},
	{
		name: 'TypeScript',
		icon: SiTypescript,
		color: '#377cc8',
	},
	{
		name: 'React',
		icon: FaReact,
		color: '#149eca',
	},
	{
		name: 'Git',
		icon: FaGitAlt,
		color: '#f54d27',
	},
	{
		name: 'Github',
		icon: FaGithub,
		color: '#e6edf3',
	},
	{
		name: 'Figma',
		icon: FaFigma,
		color: '#eb4c1d',
	},
];

export const tags = {
	next: {
		name: 'Next.js',
		background: '#000',
		color: '#fff',
		icon: SiNextdotjs,
	},
	tailwind: {
		name: 'Tailwind CSS',
		background: '#36b7f0aa',
		color: '#fff',
		icon: SiTailwindcss,
	},
	typescript: {
		name: 'TypeScript',
		background: '#377cc8',
		color: '#fff',
		icon: SiTypescript,
	},
	shadcnui: {
		name: 'shadcn/ui',
		background: '#000',
		color: '#fafafa',
		icon: SiShadcnui,
	},
};

export const projects = [
	{
		title: 'Tasks App',
		description:
			'Aplicacion web de lista de tareas desarrollada en NextJs, los datos se guardan localmente en el cliente y cuenta con las funcionalidades de crear, editar y eliminar entradas',
		link: 'https://tasks-app-jpc.vercel.app/',
		github: 'https://github.com/Can3do/tasks-app',
		image: '/project-tasksApp.png',
		tags: [tags.next, tags.tailwind, tags.typescript, tags.shadcnui],
	},
	{
		title: 'FB Soluciones Inmobiliarias',
		description:
			'Web para una inmobiliaria local desarrollada en WordPress. Esta plataforma permite a la inmobiliaria administrar propiedades de manera eficiente. Los clientes pueden buscar y visualizar detalles de propiedades, además de contactar directamente con la agente para más información. La web es fácil de navegar, con un diseño atractivo y optimizado para dispositivos móviles.',
		link: 'https://fbsolucionesinmobiliarias.com.uy/',
		github: null,
		image: '/project-fbsolucionesinmobiliarias.png',
		tags: [],
	},
];
