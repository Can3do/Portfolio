import ProjectsSection from '@/components/projectsSection';
import AboutSection from '@/components/aboutSection';
import HeroSection from '@/components/heroSection';
import TechnologiesSection from '@/components/technologiesSection';

const HomePage = () => {
	return (
		<main className='flex flex-col items-center '>
			<HeroSection />
			<ProjectsSection />
			<AboutSection />
			<TechnologiesSection />
		</main>
	);
};

export default HomePage;
