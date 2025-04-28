import { useState } from "react";
import "./CalculateScore.css";

const totalScoreTable = [
  1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5,
];
const scoreTable = [
  1, 1, 0.8, 0.5, 0, 2, 2, 1.6, 1, 0, 3, 3, 2.4, 1.5, 0, 1, 1, 0.8, 0.5, 0, 5,
  5, 2.5, 2, 0,
];
const totalBreakTable = [1, 1, 1, 1, 1];
const breakTable = [1, 0.5, 0.4, 0.3, 0];
const dxTable = [3, 2, 1, 0, 0];

export default function CalculateScore({ valArr }) {
  const [percent, setPercent] = useState(0.0);
  const [dxScore, setDX] = useState(0);
  const [totalDxScore, settotalDX] = useState(0);

  function calculate() {
    // 1. calculate note score
    var totalNoteScore = 0,
      noteScore = 0;

    // 3. calculate dx score
    var newTotalDxScore = 0,
      newDxScore = 0;
    for (var i = 0; i < 25; i++) {
      totalNoteScore += totalScoreTable[i] * valArr[i];
      noteScore += scoreTable[i] * valArr[i];
      newTotalDxScore += 3 * valArr[i];
      newDxScore += dxTable[i % 5] * valArr[i];
    }
    noteScore += valArr[27] * 1.5 + valArr[28] * 0.5;

    // 2. calculate break score
    var totalBreakScore = 0,
      breakScore = 0;
    for (i = 20; i < 25; i++) {
      totalBreakScore += totalBreakTable[i - 20] * valArr[i];
      breakScore += breakTable[i - 20] * valArr[i];
    }
    breakScore += valArr[25] * 0.25;

    var newPercent =
      (noteScore / totalNoteScore) * 100.0 + breakScore / totalBreakScore;
    newPercent = newPercent.toFixed(4);

    setPercent(newPercent);
    setDX(newDxScore);
    settotalDX(newTotalDxScore);
  }
  return (
    <>
      <div className="container">
        <div className="getResult">
          <button className="getCalButton" onClick={calculate}>
            계산
          </button>
        </div>
      </div>
      <div className="container">
        <div className="resultText">
          <p>{percent + "%"}</p>
          <br></br>
          <p>
            DX score : {dxScore} / {totalDxScore}
          </p>
        </div>
      </div>
    </>
  );
}
