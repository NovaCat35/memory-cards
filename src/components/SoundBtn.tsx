import { useEffect, useContext } from "react";
import { pageContext } from "../App";
import VolumeBtnOn from "../assets/volume_on.svg";
import VolumeBtnOff from "../assets/volume_off.svg";
import "../styles/Sound.scss";
import { useSoundContext } from "../contexts/SoundContext";

function SoundBtn() {
	const { currSoundActive, setCurrSoundActive, playMainTrack, playWinTrack, playDefeatTrack, stopMainTrack, stopDefeatTrack, stopWinTrack } = useSoundContext();
	const { winActive, loseActive } = useContext(pageContext);

	// useEffect triggers to play the next sound in the main track for every increment in the soundFiles
	useEffect(() => {
		const handleSoundEnd = () => {
			if (currSoundActive && !winActive && !loseActive) {
				playMainTrack();
			}
		};
		handleSoundEnd();
		return () => stopMainTrack();
	}, [currSoundActive, loseActive, playMainTrack, stopMainTrack, winActive]);

	// Turning sound on or off & show appropriate img icon
	const toggleSound = () => {
		if (currSoundActive) {
			stopMainTrack();
			stopDefeatTrack();
			stopWinTrack();
		} else {
			const selectedTrack = winActive ? playWinTrack : loseActive ? playDefeatTrack : playMainTrack;
			selectedTrack();
		}
		setCurrSoundActive((prevSound) => !prevSound);
	};

	return (
		<div className="sound-btn-container">
			<button onClick={toggleSound}>
				<img src={currSoundActive ? VolumeBtnOn : VolumeBtnOff} alt="volume button" />
			</button>
		</div>
	);
}

export default SoundBtn;
