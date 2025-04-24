import { useState, useRef } from "react";
import "./App.css";
import CalculateScore from "./CalculateScore";
import ScoreInputTable from "./ScoreInputBox";

function App() {
  const [valArr, setValArr] = useState(Array(25).fill(0));

  return (
    <div className="App">
      <div>
        <h1>마이마이 스코어 계산기</h1>
      </div>
      <ScoreInputTable valArr={valArr} setValArr={setValArr} />
      <CalculateScore valArr={valArr} />
    </div>
  );
}

export default App;
