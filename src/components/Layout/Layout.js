import { useState, useEffect } from 'react';
import NewsLetterPop from '../NewsLetterPop/NewsLetterPop';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.scss';

const Layout = ({ children }) => {
	const [newsLetter, setNewsLetter] = useState(false);

	// const localStorageNewsletter = localStorage.getItem('newsletter');

	useEffect(() => {
		const getNewsLetter = () => {
			if (!newsLetter) {
				setTimeout(() => {
					setNewsLetter(true);
					// localStorage.setItem('newsletter', true);
				}, 180000);
			}
		};
		getNewsLetter();
	}, []);

	const isNewsLetter = () => {
		setNewsLetter(false);
		// localStorage.setItem('newsletter', false);
	};

	return (
		<div className="layout">
			{newsLetter && <NewsLetterPop onClick={isNewsLetter} />}
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
