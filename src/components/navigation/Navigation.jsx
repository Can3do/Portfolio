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
				className={`sticky left-0 right-0 top-0 min-h-[4rem] box-border flex items-stretch justify-center bg-zinc-950/70 backdrop-blur-lg z-50`}
			>
				<div
					className={`flex w-full max-w-7xl items-center ms-6 md:px-16 `}
				>
					{/* Burger Menu */}
					<div
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className='flex items-center sm:hidden'
					>
						<button
							className={`${styles.button} relative z-50`}
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

					<nav className=' flex w-full'>
						{/* navegacion de telefono */}

						<div
							className={`${styles.menu_mobile} absolute left-0 top-[4rem] z-30 flex w-full overflow-hidden border-zinc-700 bg-zinc-950 px-6 sm:px-16 sm:hidden`}
							aria-expanded={isMenuOpen}
						>
							<ul className='flex w-full flex-col items-start gap-8  py-[3rem] '>
								{navLinks.map((link) => (
									<li
										key={link.id}
										className={`flex w-full  pb-2 ${styles.menu_mobile_li}`}
										aria-expanded={isMenuOpen}
										onClick={() =>
											setIsMenuOpen(!isMenuOpen)
										}
									>
										<Link
											href={link.url}
											className='h-full w-full text-xl font-normal text-zinc-300 hover:text-white focus:text-white'
										>
											{`${link.name}.`}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Navegacion de escritorio */}
						<div className=' flex max-sm:hidden'>
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
