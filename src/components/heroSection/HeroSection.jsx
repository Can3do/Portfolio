import { Playfair } from 'next/font/google';
import Link from 'next/link';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

const playfair = Playfair({ subsets: ['latin'] });

const HeroSection = () => {
	return (
		<section id='home' className='section lg:pt-24'>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col gap-4'>
					<h1
						className={`${playfair.className}  text-6xl font-semibold text-zinc-300`}
					>
						¡Hola! Soy Juan Pablo Canedo
					</h1>

					<p className=' text-xl font-normal text-zinc-300'>
						Me gusta crear productos sólidos y buenas experiencias
						de usuario
					</p>
				</div>

				<div className='flex w-full  gap-4 sm:w-[auto] flex-row items-center justify-start'>
					<Link
						href='#projects'
						className={` text-md rounded-full bg-sky-500/40 px-6 py-3 font-normal  hover:bg-sky-700/50 transition-colors`}
					>
						Ver proyectos
					</Link>
					<Link
						href=''
						className='text-md rounded-full bg-emerald-500/40 px-6 py-3 font-normal  hover:bg-emerald-700/50 transition-colors'
					>
						Contáctame
					</Link>
				</div>

				<div className='flex gap-4 justify-start'>
					<Link
						href='https://www.linkedin.com/in/juan-pablo-canedo/'
						target='_blank'
					>
						<FaLinkedinIn className='w-10 h-10' />
					</Link>
					<Link href='https://github.com/Can3do' target='_blank'>
						<FaGithubAlt className='w-10 h-10' />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
