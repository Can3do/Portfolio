import ProjectsSection from '@/components/projectsSection';
import AboutSection from '@/components/aboutSection';
import HeroSection from '@/components/heroSection';
import TechnologiesSection from '@/components/technologiesSection';
import ContactSection from '@/components/contactSection';

const HomePage = () => {
	return (
		<main className='flex flex-col items-center  overflow-hidden'>
			<HeroSection />
			<ProjectsSection />
			<AboutSection />
			<TechnologiesSection />
			<ContactSection />
		</main>
	);
};

export default HomePage;
