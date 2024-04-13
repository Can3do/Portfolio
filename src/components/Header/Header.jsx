'use client';
import Link from 'next/link';
import HeaderNav from './headerNav';
import BurgerMenu from './burgerMenu';
import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			<header className='box-border flex  items-stretch justify-center border-b border-zinc-600'>
				<div className='flex w-full max-w-7xl flex-col items-center justify-between px-6 sm:px-16 md:flex-row'>
					<div className='flex h-[5rem] w-full items-center justify-between'>
						<Link
							href={'/'}
							className='text-xl font-bold text-zinc-200'
						>
							Juan Pablo Canedo
						</Link>

						<div onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<BurgerMenu
								onClick={setIsMenuOpen}
								isMenuOpen={isMenuOpen}
							/>
						</div>
					</div>

					<HeaderNav
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
