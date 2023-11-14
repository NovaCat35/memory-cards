import { useContext } from "react";
import { pageContextType, pageContext } from "../../App";
// import defeatGif from "../../assets/defeat.gif";
import "../../styles/DefeatPage.scss";
import backgroundVideo from "../../assets/raiden-shogun-meditating.mp4";


function LosePage() {
	const { setLoseActive } = useContext<pageContextType>(pageContext);
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

	return (
		<div className="main-lose-container">
			<video autoPlay muted loop playsInline id="backgroundVideo">
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<h1>Challenge Failed</h1>
			<p>Looks like you're not going to make it out of Tenshukaku alive today.</p>
			{/* <img src={gifSrc} alt="victory gif" /> */}
			<button onClick={() => setLoseActive(false)}>Try again?</button>
		</div>
	);
}

export default LosePage;
