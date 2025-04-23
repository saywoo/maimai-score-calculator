import { useState, useRef } from "react";
import "./App.css";
import CalculateScore from "./CalculateScore";
import ScoreInputTable from "./ScoreInputBox";

function App() {
  const [valArr, setValArr] = useState(Array(25).fill(0));

  return (
    <div className="App">
      <h1>maimai 스코어 계산기</h1>
      <ScoreInputTable valArr={valArr} setValArr={setValArr} />
      <CalculateScore valArr={valArr} />
    </div>
  );
}

export default App;
