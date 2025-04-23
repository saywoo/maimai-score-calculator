import "./ScoreInputBox.css";
import { useState, useRef } from "react";
import CalculateScore from "./CalculateScore";

function ScoreInputBox({ id, valArr, setValArr }) {
  const [value, setValue] = useState(0);

  const saveValue = (event) => {
    const temp = event.target.value;
    if (temp == null) temp = "0";
    const num = Number(temp);
    event.target.value = num;
    setValue(num);

    const nextValArr = valArr.slice();
    nextValArr[id] = num;
    setValArr(nextValArr);
  };

  return <input type="number" value={value} onChange={saveValue}></input>;
}

function ScoreInputTable({ valArr, setValArr }) {
  return (
    <>
      <table>
        <thead>
          <tr className="topRow">
            <th scope="col"></th>
            <th scope="col" className="criperfectCol">
              CRITICAL PERFECT
            </th>
            <th scope="col" className="perfectCol">
              PERFECT
            </th>
            <th scope="col" className="greatCol">
              GREAT
            </th>
            <th scope="col" className="goodCol">
              GOOD
            </th>
            <th scope="col" className="missCol">
              MISS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="tapRow">
            <td className="noteName">TAP</td>
            <td className="criperfectCol">
              <ScoreInputBox id={0} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="perfectCol">
              <ScoreInputBox id={1} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="greatCol">
              <ScoreInputBox id={2} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="goodCol">
              <ScoreInputBox id={3} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="missCol">
              <ScoreInputBox id={4} valArr={valArr} setValArr={setValArr} />
            </td>
          </tr>
          <tr className="holdRow">
            <td className="noteName">HOLD</td>
            <td className="criperfectCol">
              <ScoreInputBox id={5} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="perfectCol">
              <ScoreInputBox id={6} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="greatCol">
              <ScoreInputBox id={7} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="goodCol">
              <ScoreInputBox id={8} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="missCol">
              <ScoreInputBox id={9} valArr={valArr} setValArr={setValArr} />
            </td>
          </tr>
          <tr className="slideRow">
            <td className="noteName">SLIDE</td>
            <td className="criperfectCol">
              <ScoreInputBox id={10} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="perfectCol">
              <ScoreInputBox id={11} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="greatCol">
              <ScoreInputBox id={12} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="goodCol">
              <ScoreInputBox id={13} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="missCol">
              <ScoreInputBox id={14} valArr={valArr} setValArr={setValArr} />
            </td>
          </tr>
          <tr className="touchRow">
            <td className="noteName">TOUCH</td>
            <td className="criperfectCol">
              <ScoreInputBox id={15} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="perfectCol">
              <ScoreInputBox id={16} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="greatCol">
              <ScoreInputBox id={17} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="goodCol">
              <ScoreInputBox id={18} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="missCol">
              <ScoreInputBox id={19} valArr={valArr} setValArr={setValArr} />
            </td>
          </tr>
          <tr className="breakRow">
            <td className="noteName">BREAK</td>
            <td className="criperfectCol">
              <ScoreInputBox id={20} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="perfectCol">
              <ScoreInputBox id={21} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="greatCol">
              <ScoreInputBox id={22} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="goodCol">
              <ScoreInputBox id={23} valArr={valArr} setValArr={setValArr} />
            </td>
            <td className="missCol">
              <ScoreInputBox id={24} valArr={valArr} setValArr={setValArr} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ScoreInputTable;
