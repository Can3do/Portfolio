'use client';
import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/constants';
import styles from './styles.module.css';

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<header
				className={`sticky left-0 right-0 top-0 box-border flex items-stretch justify-center border-b border-zinc-600 bg-zinc-950/90 backdrop-blur-md`}
			>
				<div
					className={`flex w-full max-w-7xl flex-col items-center justify-between px-6 sm:px-16 md:flex-row`}
				>
					<div className='flex min-h-[4rem] w-full items-center justify-between'>
						<Link
							href={'/'}
							className='text-xl font-bold text-zinc-200'
						>
							Juan Pablo Canedo
						</Link>

						<div onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<button
								className={`${styles.button} relative z-50 md:hidden`}
								aria-controls='primary-navigation'
								aria-expanded={isMenuOpen}
							>
								<svg
									stroke='var(--button-color)'
									fill='none'
									className={`${styles.hamburger} -z-1 lg:hidden`}
									viewBox='-10 -10 120 120'
									width='50'
								>
									<path
										className={styles.line}
										strokeWidth='6'
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70'
									></path>
								</svg>
							</button>
						</div>
					</div>

					<nav className=' flex w-full justify-end'>
						{/* navegacion de telefono */}

						<div
							className={`${styles.menu_mobile} absolute left-0 top-[4rem] z-30 flex w-full overflow-hidden border-zinc-700 bg-zinc-950 px-6 sm:px-16 md:hidden`}
							aria-expanded={isMenuOpen}
						>
							<ul className='flex w-full flex-col items-start gap-8  py-[3rem] '>
								{navLinks.map((link) => (
									<li
										key={link.id}
										className={`flex w-full border-b border-white/70 pb-2 ${styles.menu_mobile_li}`}
										aria-expanded={isMenuOpen}
										onClick={() =>
											setIsMenuOpen(!isMenuOpen)
										}
									>
										<Link
											href={link.url}
											className='h-full w-full text-3xl font-bold text-zinc-300 hover:text-white focus:text-white'
										>
											{`${link.name}.`}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Navegacion de escritorio */}
						<div className=' flex max-md:hidden'>
							<ul className='flex items-center gap-8'>
								{navLinks.map((link) => (
									<li
										key={link.id}
										onClick={() =>
											setIsMenuOpen(!isMenuOpen)
										}
									>
										<Link
											href={link.url}
											className='text-l font-normal text-zinc-300 hover:text-white'
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navigation;
