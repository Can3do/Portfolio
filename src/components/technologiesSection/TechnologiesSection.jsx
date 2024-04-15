import {
	HtmlIcon,
	CssIcon,
	FigmaIcon,
	GithubIcon,
	GitIcon,
	JavascriptIcon,
	NextjsIcon,
	ReactIcon,
	TailwindIcon,
} from '@/components/icons';

const TechnologiesSection = () => {
	return (
		<section className='section'>
			<div className='flex w-full flex-col gap-12'>
				<div>
					<h2 id='projects' className='text-5xl font-semibold'>
						Tecnologías.
					</h2>
				</div>
				<div className='flex flex-wrap justify-start'>
					<div className='flex flex-wrap justify-center gap-5'>
						<HtmlIcon height={60} width={60} />
						<CssIcon height={60} width={60} />
						<TailwindIcon height={60} width={60} />
						<JavascriptIcon height={60} width={60} />
						<ReactIcon height={60} width={60} />
						<NextjsIcon height={60} width={60} />
						<GitIcon height={60} width={60} />
						<GithubIcon height={60} width={60} />
						<FigmaIcon height={60} width={60} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default TechnologiesSection;
