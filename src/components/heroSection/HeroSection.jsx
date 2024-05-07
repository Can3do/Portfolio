import { Playfair } from 'next/font/google';
import Link from 'next/link';
import { FaGithubAlt, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { Button } from '../ui/button';

const playfair = Playfair({ subsets: ['latin'] });

const HeroSection = () => {
	return (
		<section id='home' className='section lg:pt-24 relative'>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col gap-4'>
					<h1
						className={`${playfair.className} text-6xl md:text-7xl font-noramal text-zinc-300 `}
					>
						¡Hola! Soy Juan Pablo Canedo{' '}
						<span className='bg-gradient-to-r from-indigo-600 to-rose-500 bg-clip-text text-transparent '>
							Frontend Dev.
						</span>
					</h1>

					<p className=' text-lg font-normal text-zinc-300 max-w-2xl'>
						Nuevo en la industria. de Montevideo, Uruguay. Me gusta
						crear productos sólidos y buenas experiencias de usuario
					</p>
				</div>

				<div className='flex w-full  gap-4 sm:w-[auto] flex-row items-center justify-start'>
					<Link href='#contact'>
						<Button
							size='lg'
							className='text-foreground rounded-full bg-indigo-600/30 px-6 py-2 font-normal hover:bg-indigo-500/50 transition-colors box-border flex items-center gap-2 '
						>
							{' '}
							<FaPaperPlane className=' w-4 h-4' />
							Contáctame
						</Button>
					</Link>

					<Link
						target='_blank'
						href='https://www.linkedin.com/in/juan-pablo-canedo/'
					>
						<Button
							variant='outline'
							size='lg'
							className=' rounded-full font-normal transition-colors box-border flex items-center gap-2 '
						>
							<FaLinkedinIn />
							LInkedin
						</Button>
					</Link>
				</div>

				<div className='flex gap-4 justify-start '>
					<Link href='https://github.com/Can3do' target='_blank'>
						<FaGithubAlt className='w-10 h-10' />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
