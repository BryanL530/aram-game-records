import { useState } from "react";
import "../css/Match.css";
import MatchDetail from "./MatchDetail";

function Match(props) {
  const [showDetail, setDetail] = useState(false);
  
  return (
    <div className="match-container">
      A Match
      <button type="button" onClick={() => setDetail(!showDetail)}> Click Here for detail!!!</button>
      {showDetail ? <MatchDetail /> : null}
    </div>
  );
}

export default Match;

