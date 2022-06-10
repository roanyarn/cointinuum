import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../Context/DarkModeContext';
import Button from '../../components/Button/Button';
import PossibilitiesCard from '../../components/PossibilitiesCard/PossibilitiesCard';
import Title from '../../components/Title/Title';
import VideoCard from '../../components/VideoCard/VideoCard';
import Stability from '../../images/home/Stability.png';
import Liquidity from '../../images/home/Liquidity.png';
import Community from '../../images/home/Community.png';
import MainVid from '../../images/home/final.mp4';
import Test from '../../images/home/gas2.png';
import HeaderCard from '../../components/HeaderCard/Header';
import Logo from '../../images/solutions/test.png';
import './HomePage.scss';

const HomePage = () => {
	const navigate = useNavigate();
	const { darkMode } = useContext(DarkModeContext);
	const [openVideo, setOpenVideo] = useState(false);

	const windowWidth = window.innerWidth;

	const handleLearnMore = () => {
		setOpenVideo(!openVideo);
		if (!openVideo) {
			if (windowWidth > 1919) {
				window.scrollTo({ top: 2250, behavior: 'smooth' });
			} else if (windowWidth > 1359) {
				window.scrollTo({ top: 2450, behavior: 'smooth' });
			} else if (windowWidth > 1023) {
				window.scrollTo({ top: 2650, behavior: 'smooth' });
			} else if (windowWidth > 599) {
				window.scrollTo({ top: 2950, behavior: 'smooth' });
			} else {
				window.scrollTo({ top: 3400, behavior: 'smooth' });
			}
		} else {
			return;
		}
	};

	const onStabilityClick = () => {
		navigate('/solutions');
		if (windowWidth > 1919) {
			window.scrollTo({ top: 50, behavior: 'smooth' });
		} else if (windowWidth > 1359) {
			window.scrollTo({ top: 200, behavior: 'smooth' });
		} else if (windowWidth > 1023) {
			window.scrollTo({ top: 300, behavior: 'smooth' });
		} else if (windowWidth > 599) {
			window.scrollTo({ top: 600, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 900, behavior: 'smooth' });
		}
	};

	const onLiquidityClick = () => {
		navigate('/solutions');
		if (windowWidth > 1919) {
			window.scrollTo({ top: 380, behavior: 'smooth' });
		} else if (windowWidth > 1359) {
			window.scrollTo({ top: 610, behavior: 'smooth' });
		} else if (windowWidth > 1023) {
			window.scrollTo({ top: 750, behavior: 'smooth' });
		} else if (windowWidth > 599) {
			window.scrollTo({ top: 1220, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 1600, behavior: 'smooth' });
		}
	};

	const onCommunityClick = () => {
		navigate('/solutions');
		if (windowWidth > 1919) {
			window.scrollTo({ top: 800, behavior: 'smooth' });
		} else if (windowWidth > 1359) {
			window.scrollTo({ top: 1020, behavior: 'smooth' });
		} else if (windowWidth > 1023) {
			window.scrollTo({ top: 1300, behavior: 'smooth' });
		} else if (windowWidth > 599) {
			window.scrollTo({ top: 1920, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 2380, behavior: 'smooth' });
		}
	};

	return (
		<div className={darkMode ? 'homepage homepage__dark' : 'homepage'}>
			<HeaderCard
				className={
					darkMode
						? 'header__card header__card--dark header__reverse'
						: 'header__card header__reverse'
				}
				image={Test}
				title="BRX Exchange is a fast and hassle-free real estate investment vehicle, Powered by Cointinuum."
				paragraph1="Learn how we’re fueling positive social and economic impact in your community. "
			/>
			<Title
				title="Boundless Digital Real Estate"
				paragraph="Democratizing real estate investments while empowering community equity and development through Cointinuum, a new real estate-backed stablecoin that provides liquidity and stability for real estate and cryptocurrency portfolios."
			/>
			<img className="homepage__logoImage" src={Logo} alt="cointinuum" />
			<div className="homepage__possibilities">
				<h1 className="homepage__possibilities--title">
					Boundless Possibilities
				</h1>
				<p className="homepage__possibilities--paragraph">
					Cointinuum and the Bit Real Estate Exchange (BRX) solve some of the
					most elusive challenges in real estate, cryptocurrency, and community
					redevelopment. The possibilities with Cointinuum BRX are boundless.
				</p>
				<div className="possibilities__card--container">
					<PossibilitiesCard
						image={Stability}
						title="Stability"
						onClick={onStabilityClick}
						paragraph="A stablecoin that resists inflation, with profit potential and positive social impact"
					/>
					<PossibilitiesCard
						image={Liquidity}
						title="Liquidity"
						onClick={onLiquidityClick}
						paragraph="Fast and easy institutional grade investments with no minimums or term requirements"
					/>
					<PossibilitiesCard
						image={Community}
						title="Community"
						onClick={onCommunityClick}
						paragraph="Access new economic and redevelopment opportunities through crypto"
					/>
				</div>
			</div>
			<Button
				className={
					darkMode ? 'btn__primary btn__primary--dark' : 'btn__primary'
				}
				content={openVideo ? 'Learn More <' : 'Learn More >'}
				content2={openVideo ? 'Learn More <' : 'Learn More >'}
				onClick={handleLearnMore}
			/>
			{openVideo && <VideoCard video={MainVid} />}
		</div>
	);
};

export default HomePage;
