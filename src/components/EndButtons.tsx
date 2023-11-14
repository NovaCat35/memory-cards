import { useContext} from "react";
import { pageContextType, pageContext } from "../App";
import CloseSVG from "../assets/closeBtn.svg";
import ReturnSVG from "../assets/returnBtn.svg"

interface EndButtonsProps {
   activeType:string;
}

function EndButtons({activeType}:EndButtonsProps) {
   const { setWinActive, setLoseActive, setDifficultyActive } = useContext<pageContextType>(pageContext);
	const handleReturnToMenu = () => {
		setDifficultyActive(true);
		(activeType == 'win') ? setWinActive(false): setLoseActive(false)
	};
   
	return (
		<div className="btn-container">
			<button onClick={() => (activeType == 'win') ? setWinActive(false): setLoseActive(false)}>
				<div className="img-wrapper"><img className="return" src={ReturnSVG} alt="continue icon" /></div>
				<p>Retry</p>
			</button>
			<button onClick={handleReturnToMenu}>
				<div className="img-wrapper"><img className="cancel" src={CloseSVG} alt="leave icon" /></div>
				<p>Leave for Now</p>
			</button>
		</div>
	);
}

export default EndButtons;
