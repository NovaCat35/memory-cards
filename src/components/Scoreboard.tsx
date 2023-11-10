import {useContext} from "react";
import {pageContextType, pageContext} from "../App";
import "../styles/ScoreBoard.scss"

function Scoreboard() {
   const {currScore, bestScore} = useContext<pageContextType>(pageContext);

  return (
    <div className="main-scoreboard">
      <div className="curr-score"><h2>Score</h2><div className="score">{currScore}</div></div>
      <div className="best-score"><h2>Best Score</h2>{bestScore}</div>
    </div>
  )
}

export default Scoreboard