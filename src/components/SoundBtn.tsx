import { useState, useEffect } from "react";
import VolumeBtnOn from "../assets/volume_on.svg";
import VolumeBtnOff from "../assets/volume_off.svg";
import "../styles/Sound.scss";
import { useSoundContext } from "../contexts/SoundContext";

function SoundBtn() {
	const [sound, setSound] = useState<boolean>(false);
	const { playMainTrack, stopMainTrack } = useSoundContext();

	// useEffect triggers at end of sound and increments soundIndex
	useEffect(() => {
		const handleSoundEnd = () => {
			playMainTrack(); // Play the next sound
		};
		handleSoundEnd();
		return () => stopMainTrack();
	}, [playMainTrack]);

	// Turning sound on or off & show appropriate img icon
	const toggleSound = () => {
		sound ? stopMainTrack() : playMainTrack();
		setSound((prevSound) => !prevSound);
	};

	return (
		<div className="sound-btn-container">
			<button onClick={toggleSound}>
				<img src={sound ? VolumeBtnOn : VolumeBtnOff} alt="volume button" />
			</button>
		</div>
	);
}

export default SoundBtn;
