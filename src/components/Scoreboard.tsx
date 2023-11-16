import {useContext} from "react";
import {pageContextType, pageContext} from "../App";
import "../styles/Scoreboard.scss"

function Scoreboard() {
   const {currScore, bestScore} = useContext<pageContextType>(pageContext);

  return (
    <div className="main-scoreboard">
      <div className="current-score"><h2>Score</h2><p className="score">{currScore}</p></div>
      <div className="best-score"><h2>Best Score</h2><p className="score">{bestScore}</p></div>
    </div>
  )
}

export default Scoreboard