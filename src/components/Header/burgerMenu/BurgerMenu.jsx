import styles from './styles.module.css';

const BurgerMenu = ({ isMenuOpen }) => {
	return (
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
	);
};

export default BurgerMenu;
