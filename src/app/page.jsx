import ProjectsSection from '@/components/projectsSection';
import AboutSection from '@/components/aboutSection';
import HeroSection from '@/components/heroSection';
import TechnologiesSection from '@/components/technologiesSection';
import ContactSection from '@/components/contactSection';
import Link from 'next/link';

const HomePage = () => {
	return (
		<main className='flex flex-col items-center overflow-hidden'>
			<HeroSection />
			<ProjectsSection />
			<AboutSection />
			<TechnologiesSection />
			<ContactSection />
			<footer className=' section'>
				<p className='font-semibold'>
					{'Créditos a Miguel Angel Durán por su trabajo en '}
					<Link
						href={'https://porfolio.dev/'}
						className='text-yellow-300 underline'
					>
						Portfolio.dev
					</Link>
				</p>
			</footer>
		</main>
	);
};

export default HomePage;
