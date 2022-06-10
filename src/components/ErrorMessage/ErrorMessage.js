import './ErrorMessage.scss';

const ErrorMessage = ({ children }) => {
	return <p className="error__message">{children}</p>;
};

export default ErrorMessage;
