import ProjectsSection from '@/components/projectsSection';
import AboutSection from '@/components/aboutSection';
import HeroSection from '@/components/heroSection';
import TechnologiesSection from '@/components/technologiesSection';

const HomePage = () => {
	return (
		<main className='flex flex-col items-center bg-[radial-gradient(ellipse_80%_80%_at_50%_-30%,rgba(100,100,100,.15),rgba(255,255,255,.0))]'>
			<HeroSection />
			<ProjectsSection />
			<AboutSection />
			<TechnologiesSection />
		</main>
	);
};

export default HomePage;
