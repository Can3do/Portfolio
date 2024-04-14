const TechnologiesSection = () => {
	return (
		<section className='section'>
			<div className='flex w-full flex-col gap-8'>
				<div>
					<h2 id='projects' className='text-5xl font-semibold'>
						Tecnologías.
					</h2>
				</div>
				<div className='flex flex-col flex-wrap items-center justify-center gap-8 py-12 md:flex-row'>
					<div className='flex flex-col items-center gap-4 rounded-3xl bg-zinc-900 px-12 py-8'>
						<h3 className='text-center text-3xl font-semibold'>
							Frontend
						</h3>
						<div className='flex max-w-[20rem] flex-wrap justify-center gap-4 p-4'>
							<div className='h-[80px] w-[80px] rounded-full bg-blue-500'></div>
							<div className='h-[80px] w-[80px] rounded-full bg-blue-500'></div>
							<div className='h-[80px] w-[80px] rounded-full bg-blue-500'></div>
							<div className='h-[80px] w-[80px] rounded-full bg-blue-500'></div>
							<div className='h-[80px] w-[80px] rounded-full bg-blue-500'></div>
							<div className='h-[80px] w-[80px] rounded-full bg-blue-500'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TechnologiesSection;
