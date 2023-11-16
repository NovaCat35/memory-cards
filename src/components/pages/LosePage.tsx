import { useEffect } from "react";
import "../../styles/DefeatPage.scss";
import backgroundVideo from "../../assets/raiden-shogun-meditating.mp4";
import EndButtons from "../EndButtons.tsx";
import { useSoundContext } from "../../contexts/SoundContext";
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
			<video autoPlay muted loop playsInline id="backgroundVideo">
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<h1>Challenge Failed</h1>
			<p>Looks like you're not going to make it out of Tenshukaku alive today.</p>
			{/* <img src={gifSrc} alt="victory gif" /> */}
			<EndButtons activeType="lose" />
		</div>
	);
}

export default LosePage;
