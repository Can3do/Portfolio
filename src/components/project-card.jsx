import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export const ProjectCard = ({
	project: { image, title, description, tags, link, github },
}) => {
	return (
		<article className='flex flex-col lg:flex-row gap-6' key={title}>
			<div className='w-full lg:w-[40%]'>
				<Link href={link} target='_blank'>
					<div className='overflow-clip rounded-xl h-56 border'>
						<Image
							alt={title}
							className='object-cover object-top'
							src={image}
							width={1200}
							height={600}
						/>
					</div>
				</Link>
			</div>

			<div className='w-full md:max-w-lg'>
				<h3 className='text-2xl font-bold text-foreground'>{title}</h3>
				<div className='flex flex-wrap mt-2'>
					<ul className='flex flex-row mb-2 gap-2 flex-wrap'>
						{tags.map((tag) => (
							<li key={tag.name}>
								<Badge
									variant={'default'}
									className={`flex gap-x-2 rounded-full items-center`}
									style={{
										background: tag.background,
										color: tag.color,
									}}
								>
									<tag.icon className='size-4' />
									{tag.name}
								</Badge>
							</li>
						))}
					</ul>

					<div className='mt-2 text-foreground/70 w-full'>
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
	);
};
