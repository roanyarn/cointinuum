import './CommonButton.scss';

const CommonButton = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default CommonButton;
