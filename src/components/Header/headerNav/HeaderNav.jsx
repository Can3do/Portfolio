'use client';
import { motion } from 'framer-motion';
import { navLinks } from '@/constants';
import Link from 'next/link';

const HeaderNav = ({ isMenuOpen, setIsMenuOpen }) => {
	return (
		<nav className='flex w-full justify-end'>
			{/* navegacion de telefono */}

			{isMenuOpen && (
				<motion.div
					className=' top-[5rem] z-30 flex w-full rounded-xl  bg-zinc-950 md:hidden'
					animate={{ x: 0 }}
					initial={{ x: 400 }}
					transition={{
						duration: 0.2,
						type: 'tween',
						ease: 'easeInOut',
					}}
				>
					<motion.ul className='flex w-full flex-col items-start gap-8  py-[3rem]'>
						{navLinks.map((link) => (
							<motion.li
								key={link.id}
								className='flex w-full border-b border-white/70 pb-2'
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								<Link
									href={link.url}
									className='text-5xl font-bold text-zinc-300 hover:text-white focus:text-white'
								>
									{`${link.name}.`}
								</Link>
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			)}

			{/* Navegacion de escritorio */}
			<div className=' flex max-md:hidden'>
				<ul className='flex items-center gap-8'>
					{navLinks.map((link) => (
						<li
							key={link.id}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<Link
								href={link.url}
								className='text-lg font-semibold text-zinc-300 hover:text-white'
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default HeaderNav;
