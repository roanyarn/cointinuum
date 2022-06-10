import Cointinuum from '../../images/logo/newblogo.png';
import CointinuumWhite from '../../images/logo/newwlogo.png';
import { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';
import { DarkModeContext } from '../../Context/DarkModeContext';
import { RiMoonLine } from 'react-icons/ri';
import { MdOutlineLightMode } from 'react-icons/md';
import './Navbar.scss';

const Navbar = () => {
	const navigate = useNavigate();

	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	window.addEventListener('resize', () => {
		const windowWidth = window.innerWidth;
		if (isMenuOpen && windowWidth > 1020) {
			setIsMenuOpen(false);
		}
	});

	const onLogoClick = () => {
		navigate('/');
	};
	return (
		<nav className={darkMode ? 'navbar navbar--dark' : 'navbar'}>
			<img
				className={
					darkMode ? 'navbar__image navbar__image--dark' : 'navbar__image'
				}
				src={darkMode ? CointinuumWhite : Cointinuum}
				alt="cointinuum logo"
				onClick={onLogoClick}
			/>
			<ul
				className={
					isMenuOpen
						? darkMode
							? 'navbar__list--mobile navbar__list--mobile--dark'
							: 'navbar__list--mobile'
						: 'navbar__list'
				}
				onClick={() => setIsMenuOpen(false)}
			>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'navbar__active'
								: darkMode
								? 'navbar__link navbar__link--dark'
								: 'navbar__link'
						}
						to="/solutions"
					>
						Solutions
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'navbar__active'
								: darkMode
								? 'navbar__link navbar__link--dark'
								: 'navbar__link'
						}
						to="/investments"
					>
						Investments
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'navbar__active'
								: darkMode
								? 'navbar__link navbar__link--dark'
								: 'navbar__link'
						}
						to="/about"
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'navbar__active'
								: darkMode
								? 'navbar__link navbar__link--dark'
								: 'navbar__link'
						}
						to="connect"
					>
						Connect
					</NavLink>
				</li>
				{darkMode ? (
					<MdOutlineLightMode
						className={
							darkMode ? 'navbar__link navbar__link--dark' : 'navbar__link'
						}
						onClick={toggleDarkMode}
					/>
				) : (
					<RiMoonLine
						className={
							darkMode ? 'navbar__link navbar__link--dark' : 'navbar__link'
						}
						onClick={toggleDarkMode}
					/>
				)}
			</ul>
			<button
				className="navbar__mobile--icon"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				{isMenuOpen ? (
					<IoClose className={darkMode ? 'menu__mobile--dark' : ''} />
				) : (
					<HiMenu className={darkMode ? 'menu__mobile--dark' : ''} />
				)}
			</button>
		</nav>
	);
};

export default Navbar;
