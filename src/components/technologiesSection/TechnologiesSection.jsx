import { technologies } from '@/constants';

const TechnologiesSection = () => {
	return (
		<section className='section' id='tech'>
			<div className='flex w-full flex-col gap-12'>
				<div>
					<h2 id='projects' className='text-5xl font-semibold'>
						Tecnologías.
					</h2>
				</div>
				<div className='flex flex-wrap justify-start'>
					<div className='flex flex-wrap  gap-5'>
						{technologies.map((tech) => (
							<div
								className='p-4 flex flex-col items-center rounded-2xl gap-3'
								style={{
									backgroundColor: tech.color + '12', //agrego 12 para agregar transparecia (lo combierto en un color de 8 digitos)
								}}
							>
								<p className='font-normal'>{tech.name}</p>
								<tech.icon
									className={`w-10 h-10`}
									style={{ color: tech.color }}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TechnologiesSection;
