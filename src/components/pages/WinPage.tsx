import "../../styles/WinPage.scss";
import backgroundVideo from "../../assets/furina-running.mp4";
import EndButtons from "../EndButtons.tsx";

function WinPage() {
	return (
		<div className="main-win-container">
			<h1>You Did It, Bravo!</h1>
			<p>Raise your glasses in celebration! If you don't have one, then just raise your hand in lieu.</p>
			<video autoPlay muted loop playsInline id="backgroundVideo">
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<EndButtons activeType='win'/>
		</div>
	);
}

export default WinPage;
