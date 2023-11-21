import { useEffect } from "react";
import "../../styles/WinPage.scss";
import EndButtons from "../EndButtons.tsx";
import { useSoundContext } from "../../contexts/SoundContext";
import backgroundVideo from "../../assets/furina-running.mp4";
import backgroundPoster from "../../assets/furina_poster.jpeg";

function WinPage() {
	const { currSoundActive, playMainTrack, playWinTrack, stopWinTrack, stopMainTrack } = useSoundContext();

	// We want to control the music type when we switch end pages, that's why we need the useEffect
	useEffect(() => {
		if (currSoundActive) {
			stopMainTrack();
			playWinTrack();
		}
		return () => {
			stopWinTrack();
		};
	}, [currSoundActive, playWinTrack, playMainTrack, stopMainTrack, stopWinTrack]);

	return (
		<div className="main-win-container">
			<h1>You Did It, Bravo!</h1>
			<p className="description">Raise your glasses in celebration! Here's a toast to your unwavering spirit & the exciting adventures that lie ahead 🌟</p>
			<video muted autoPlay loop playsInline id="backgroundVideo" poster={backgroundPoster}>
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<EndButtons activeType="win" />
		</div>
	);
}

export default WinPage;
