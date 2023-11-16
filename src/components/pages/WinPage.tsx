import { useEffect } from "react";
import "../../styles/WinPage.scss";
import backgroundVideo from "../../assets/furina-running.mp4";
import EndButtons from "../EndButtons.tsx";
import { useSoundContext } from "../../contexts/SoundContext";

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
			<p>Raise your glasses in celebration! If you don't have one, then just raise your hand in lieu.</p>
			<video autoPlay muted loop playsInline id="backgroundVideo">
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<EndButtons activeType="win" />
		</div>
	);
}

export default WinPage;
