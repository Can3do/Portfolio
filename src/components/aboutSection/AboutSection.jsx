const AboutSection = () => {
	return (
		<section className='section'>
			<div className='flex w-full flex-col gap-8'>
				<div>
					<h2 id='about' className='text-4xl font-medium'>
						Acerca de mí
					</h2>
				</div>
				<div className='flex'>
					<p className='max-w-[70ch] text-lg'>
						Hola, me llamo Juan Pablo Canedo. A los 14 años, tuve mi
						primer encuentro con el mundo del desarrollo,
						específicamente con el desarrollo web, y desde entonces
						me he sentido profundamente atraído y comprometido con
						este campo.
						<br />
						<br />
						Mi camino comenzó de manera modesta, experimentando con
						HTML y CSS. Con el tiempo, fui ampliando mis
						conocimientos de forma progresiva. Hoy en día, disfruto
						creando con tecnologías como JavaScript, React.js,
						Next.js y Tailwind.
						<br />
						<br />
						Siempre estoy en constante búsqueda de aprendizaje,
						tratando de profundizar en mis habilidades y expandir mi
						horizonte en este fascinante mundo del desarrollo web.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
