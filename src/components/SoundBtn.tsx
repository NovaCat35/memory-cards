
interface SoundBtnProps {};

function SoundBtn({}: SoundBtnProps) {
	const toggleSound = () => {};

	return (
		<div className="sound-btn-container">
			<button onClick={toggleSound}></button>
		</div>
	);
}

export default SoundBtn;
