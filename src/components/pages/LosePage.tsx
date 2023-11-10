import { useContext, useState, useEffect } from "react";
import { pageContextType, pageContext } from "../../App";
import defeatGif from "../../assets/defeat.gif";
import "../../styles/DefeatPage.scss";

function LosePage() {
	const { setLoseActive } = useContext<pageContextType>(pageContext);
	const [gifSrc, setGifSrc] = useState(defeatGif);

	const reloadGif = () => {
		setGifSrc("");
		setTimeout(() => {
			setGifSrc(defeatGif);
		}, 0);
	};

	useEffect(() => {
		reloadGif(); // Reload the GIF when the component mounts
	}, []);

	return (
		<div className="main-lose-container">
			<h1>You Lose!</h1>
			<img src={gifSrc} alt="victory gif" />
			<button onClick={() => setLoseActive(false)}>Try again?</button>
		</div>
	);
}

export default LosePage;
