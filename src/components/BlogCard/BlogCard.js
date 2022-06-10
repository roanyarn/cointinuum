import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import './BlogCard.scss';

const BlogCard = ({ title, paragraph, date, image, onClick }) => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div
			className={darkMode ? 'blogCard blogCard--dark' : 'blogCard'}
			onClick={onClick}
		>
			<img className="blogCard__image" src={image} alt="blogImage" />
			<h3
				className={
					darkMode ? 'blogCard__title blogCard__title--dark' : 'blogCard__title'
				}
			>
				{title}
			</h3>
			<p className="blogCard__paragraph">{paragraph}</p>
			<p className="blogCard__date">{date}</p>
		</div>
	);
};

export default BlogCard;
