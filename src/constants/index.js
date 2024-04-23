import {
	FaHtml5,
	FaReact,
	FaGitAlt,
	FaCss3,
	FaFigma,
	FaGithub,
} from 'react-icons/fa6';
import { SiTailwindcss, SiNextdotjs, SiJavascript } from 'react-icons/si';

export const navLinks = [
	{
		name: 'Inicio',
		url: '/',
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
		color: '#38bdf8',
	},
	{
		name: 'Javascipt',
		icon: SiJavascript,
		color: '#f0dc55',
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
