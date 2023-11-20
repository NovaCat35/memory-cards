import { useEffect } from "react";
import "../../styles/DefeatPage.scss";
import EndButtons from "../EndButtons.tsx";
import { useSoundContext } from "../../contexts/SoundContext";
import backgroundVideo from "../../assets/raiden-shogun-meditating.mp4";
import backgroundPoster from "../../assets/raiden_shogun_poster.jpg";
// import defeatGif from "../../assets/defeat.gif";

function LosePage() {
	// const [gifSrc, setGifSrc] = useState(defeatGif);

	// const reloadGif = () => {
	// 	setGifSrc("");
	// 	setTimeout(() => {
	// 		setGifSrc(defeatGif);
	// 	}, 0);
	// };

	// useEffect(() => {
	// 	reloadGif(); // Reload the GIF when the component mounts
	// }, []);

	// useEffect(() => {

	// },[])
	const { currSoundActive, playMainTrack, playDefeatTrack, stopDefeatTrack, stopMainTrack } = useSoundContext();

	// We want to control the music type when we switch end pages, that's why we need the useEffect
	useEffect(() => {
		if (currSoundActive) {
			stopMainTrack();
			playDefeatTrack();
		}
		return () => {
			stopDefeatTrack();
		};
	}, [currSoundActive, playDefeatTrack, playMainTrack, stopDefeatTrack, stopMainTrack]);

	return (
		<div className="main-lose-container">
			<video muted autoPlay loop playsInline id="backgroundVideo" poster={backgroundPoster}>
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<h1>Challenge Failed</h1>
			<p className="description">You have made yourself an enemy of eternity.</p>
			{/* <img src={gifSrc} alt="victory gif" /> */}
			<EndButtons activeType="lose" />
		</div>
	);
}

export default LosePage;
