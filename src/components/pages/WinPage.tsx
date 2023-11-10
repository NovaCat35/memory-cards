import { useContext, useState, useEffect } from "react";
import { pageContextType, pageContext } from "../../App";
import victoryGif from '../../assets/victory.gif'
import "../../styles/WinPage.scss";

function WinPage() {
  const { setWinActive } = useContext<pageContextType>(pageContext);
  const [gifSrc, setGifSrc] = useState(victoryGif);

  const reloadGif = () => {
    setGifSrc('');
    setTimeout(() => {
      setGifSrc(victoryGif);
    }, 0);
  };

  useEffect(() => {
    reloadGif(); // Reload the GIF when the component mounts
  }, []);

  return (
    <div className="main-lose-container">
      <h1>You Win, Well Played!</h1>
      <img src={gifSrc} alt="victory gif" />
      <button onClick={() => setWinActive(false)}>Go again?</button>
    </div>
  )
}

export default WinPage