const ProjectsSection = () => {
	return (
		<section className='section' id='projects'>
			<div className='flex w-full flex-col gap-8'>
				<div>
					<h2 className='text-5xl font-semibold'>Proyectos.</h2>
				</div>

				<div className='flex flex-row gap-4 overflow-y-auto'>
					<div className='flex h-[20rem] w-[20rem] shrink-0 rounded-xl bg-zinc-900'></div>
					<div className='flex h-[20rem] w-[20rem] shrink-0 rounded-xl bg-zinc-900'></div>
					<div className='flex h-[20rem] w-[20rem] shrink-0 rounded-xl bg-zinc-900'></div>
					<div className='flex h-[20rem] w-[20rem] shrink-0 rounded-xl bg-zinc-900'></div>
					<div className='flex h-[20rem] w-[20rem] shrink-0 rounded-xl bg-zinc-900'></div>
					<div className='flex h-[20rem] w-[20rem] shrink-0 rounded-xl bg-zinc-900'></div>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
