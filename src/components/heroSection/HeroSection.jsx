import { Playfair } from 'next/font/google';
import Link from 'next/link';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { IoMail, IoFolder } from 'react-icons/io5';

const playfair = Playfair({ subsets: ['latin'] });

const HeroSection = () => {
	return (
		<section id='home' className='section lg:pt-24 relative'>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col gap-4'>
					<h1
						className={`${playfair.className} text-6xl md:text-8xl font-noramal text-zinc-300 `}
					>
						¡Hola! Soy Juan Pablo Canedo{' '}
						<span className='bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent '>
							Frontend Dev.
						</span>
					</h1>

					<p className=' text-xl font-normal text-zinc-300'>
						Me gusta crear productos sólidos y buenas experiencias
						de usuario
					</p>
				</div>

				<div className='flex w-full  gap-4 sm:w-[auto] flex-row items-center justify-start'>
					<Link
						href='#projects'
						className='text-md rounded-full bg-rose-600/30 px-6 py-3 font-normal  hover:bg-rose-500/50 transition-colors border border-rose-400 box-border flex items-center gap-2 text-rose-100'
					>
						<IoFolder />
						Ver proyectos
					</Link>
					<Link
						href=''
						className='text-md rounded-full bg-indigo-600/30 px-6 py-3 font-normal  hover:bg-indigo-500/50 transition-colors border border-indigo-400 box-border flex items-center gap-2 text-indigo-100'
					>
						<IoMail className=' w-5 h-5' />
						Contáctame
					</Link>
				</div>

				<div className='flex gap-4 justify-start '>
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
