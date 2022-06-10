import { BsArrowRightShort } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import emailjs from 'emailjs-com';
import useValidation from '../../hooks/useValidation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './NewsLetterPop.scss';

const NewsLetterPop = ({ onClick }) => {
	const EMAIL_MAX_SIZE = 100;
	const EMAIL_MIN_SIZE = 2;

	const [email, setEmail, emailError, handleEmailError] = useValidation({
		fieldName: 'email',
		minSize: EMAIL_MIN_SIZE,
		maxSize: EMAIL_MAX_SIZE,
		type: 'email',
		required: true,
	});

	const onEmailChange = (e) => setEmail(e.target.value);

	const sendEmail = (e) => {
		e.preventDefault();
		if (!email) {
			handleEmailError();
			return;
		}
		if (!emailError) {
			emailjs
				.sendForm(
					'service_n8zxugq',
					'template_5tayh5e',
					e.target,
					'0NbLq2er2L3Kmif5k'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
			onClick(onClick);
		}
		return;
	};

	return (
		<div className="newsLetter">
			<div className="newsLetter__card">
				<GrFormClose className="newsLetter__close" onClick={onClick} />
				<h1 className="newsLetter__title">
					Connect with Cointinuum to earn CTM!
				</h1>
				<p className="newsLetter__paragraph">
					Join our newsletter to enter a vibrant community of early
					Cointinuum adopters. 
				</p>
				<p className="newsLetter__paragraph">
					Get updates and announcements
					about upcoming events, product launches, airdrops, prizes,
					and more!
				</p>
				<form className="newsLetter__email" onSubmit={sendEmail}>
					<input
						name="email"
						className="newsLetter__input"
						type="email"
						placeholder="Email"
						value={email}
						onBlur={handleEmailError}
						onChange={onEmailChange}
					/>
					<button className="newsLetter__button" type="submit">
						<BsArrowRightShort className="newsLetter__arrow" />
					</button>
				</form>
				{emailError && <ErrorMessage>{emailError}</ErrorMessage>}
			</div>
		</div>
	);
};

export default NewsLetterPop;
