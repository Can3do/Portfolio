import Image from 'next/image';

import { projects } from '@/constants';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

const ProjectsSection = () => {
	return (
		<section className='section' id='projects'>
			<div className='flex w-full flex-col gap-8'>
				<div>
					<h2 className='text-4xl font-medium'>Proyectos</h2>
				</div>

				{projects.map(
					({ image, title, description, tags, link, github }) => (
						<article
							className='flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0'
							key={title}
						>
							<div className='w-full md:w-[35%]'>
								<div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50 h-56'>
									<Image
										alt={title}
										className='object-cover object-top  transition duration-500 h-full md:scale-110 '
										src={image}
										width={1200}
										height={600}
									/>
								</div>
							</div>

							<div className='w-full md:w-1/2 md:max-w-lg'>
								<h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100 '>
									{title}
								</h3>
								<div className='flex flex-wrap mt-2'>
									<ul className='flex flex-row mb-2 gap-x-2'>
										{tags.map((tag) => (
											<li key={tag.name}>
												<span
													className={`flex gap-x-2 rounded-full text-xs py-1 px-2 items-center`}
													style={{
														background:
															tag.background,
														color: tag.color,
													}}
												>
													<tag.icon className='size-4' />
													{tag.name}
												</span>
											</li>
										))}
									</ul>

									<div className='mt-2 text-gray-700 dark:text-gray-400'>
										{description}
									</div>
									<footer className='flex items-end justify-start mt-4 gap-x-4'>
										{github && (
											<Link href={github} target='_blank'>
												<FaGithub className='size-6' />
											</Link>
										)}
										{link && (
											<Link href={link} target='_blank'>
												<FaExternalLinkAlt className='size-5' />
											</Link>
										)}
									</footer>
								</div>
							</div>
						</article>
					)
				)}
			</div>
		</section>
	);
};

export default ProjectsSection;
