import './VideoCard.scss';

const VideoCard = ({ title, video, image }) => {
	return <video className="video__card" src={video} autoPlay controls />;
};

export default VideoCard;
