const AboutSection = () => {
	return (
		<section className='section'>
			<div className='flex w-full flex-col gap-8'>
				<div>
					<h2 id='about' className='text-4xl font-medium'>
						Acerca de mí.
					</h2>
				</div>
				<div className='flex'>
					<p className='max-w-[70ch] text-lg'>
						Hola, Soy Juan Pablo Canedo. A los 14 años conocí el
						mundo del desarrollo, más en específico, el desarrollo
						web; y desde entonces he estado profundamente
						involucrado y apasionado por este campo.
						<br />
						<br />
						Comencé como muchos, trasteando con html y css. Luego,
						progresivamente, fui expandiendo mi conocimiento;
						Javascript, Reactjs, Nextjs, Tailwind y Framer Motion
						son algunas de las tecnologías con las que hoy trabajo,
						aunque continuamente sigo profundizando e intentando ser
						mejor
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
