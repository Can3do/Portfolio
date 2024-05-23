import { projects } from '@/constants';

import { ProjectCard } from '../project-card';

const ProjectsSection = () => {
	return (
		<section className='section' id='projects'>
			<div className='flex w-full flex-col gap-8'>
				<div>
					<h2 className='text-4xl font-medium'>Proyectos</h2>
				</div>

				{projects.map((project) => (
					<ProjectCard project={project}></ProjectCard>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
