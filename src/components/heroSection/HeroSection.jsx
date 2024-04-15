import Link from 'next/link';
import { DownloadIcon, GithubIcon, LinkedinIcon } from '@/components/icons';

const HeroSection = () => {
	return (
		<section id='home' className='section justify-center lg:pt-24'>
			<div className='flex flex-col items-center gap-8'>
				<div className='flex flex-col items-center gap-4'>
					<h1 className='text-center text-6xl font-bold text-zinc-300 lg:text-7xl'>
						Juan Pablo Canedo.
					</h1>
					<h2 className='text-center text-2xl font-semibold text-blue-400 lg:text-3xl'>
						{'<Frontend Developer />'}
					</h2>
					<p className='text-center text-lg font-medium text-zinc-300'>
						Me gusta crear productos sólidos y buenas experiencias
						de usuario
					</p>
				</div>

				<div className='flex w-full flex-col gap-4 sm:w-[auto] sm:flex-row'>
					<button className='flex w-full min-w-[10rem] justify-center gap-2 rounded-full border border-zinc-500 bg-zinc-900 px-6 py-3 font-semibold hover:border-zinc-200 hover:bg-zinc-800/90'>
						Descargar CV
						<DownloadIcon />
					</button>
					<button className='min-w-[10rem] rounded-full border border-blue-400 bg-blue-900 px-6 py-3 font-semibold hover:border-blue-200 hover:bg-blue-700/95'>
						Contáctame
					</button>
				</div>

				<div className='flex gap-2'>
					<Link
						href='https://www.linkedin.com/in/juan-pablo-canedo/'
						className='rounded-xl border border-transparent p-2 hover:border hover:border-white hover:bg-white/20'
						target='_blank'
					>
						<LinkedinIcon />
					</Link>
					<Link
						href='https://github.com/Can3do'
						className='rounded-xl border border-transparent p-2 hover:border hover:border-white hover:bg-white/20'
						target='_blank'
					>
						<GithubIcon />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
