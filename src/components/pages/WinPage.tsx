import { useContext, useState, useEffect } from "react";
import { pageContextType, pageContext } from "../../App";
// import victoryGif from '../../assets/victory.gif'
import "../../styles/WinPage.scss";
import backgroundVideo from "../../assets/furina-running.mp4";

function WinPage() {
  const { setWinActive } = useContext<pageContextType>(pageContext);
  // const [gifSrc, setGifSrc] = useState(victoryGif);

  // const reloadGif = () => {
  //   setGifSrc('');
  //   setTimeout(() => {
  //     setGifSrc(victoryGif);
  //   }, 0);
  // };

  // useEffect(() => {
  //   reloadGif(); // Reload the GIF when the component mounts
  // }, []);

  return (
    <div className="main-win-container">
      <h1>You Did It, Bravo!</h1>
      <p>Raise your glasses in celebration! If you don't have one, then just raise your hand in lieu.</p>
      <video autoPlay muted loop playsInline id="backgroundVideo">
				<source src={backgroundVideo} type="video/mp4" />
			</video>
      {/* <img src={gifSrc} alt="victory gif" /> */}
      <button onClick={() => setWinActive(false)}>Onwards?</button>
    </div>
  )
}

export default WinPage