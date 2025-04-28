import "./ScoreInputBox.css";
import { useState } from "react";
import calculate from "./CalculateScore";

function ScoreInputBox({ id, valArr, setValArr }) {
  const [value, setValue] = useState(0);

  const saveValue = (event) => {
    if (event.target.value.length > 4) {
      // 입력 받은 숫자가 4자리를 넘어가면 slice
      event.target.value = event.target.value.slice(0, 4);
    }
    const temp = event.target.value;
    if (temp == null) temp = "0";
    const num = Number(temp);
    event.target.value = num;
    setValue(num);

    const nextValArr = valArr.slice();
    // break perfect 처리
    if (id == 21) {
      nextValArr[25] = 0;
      nextValArr[26] = num;
    }
    // break great 처리
    if (id == 22) {
      nextValArr[27] = 0;
      nextValArr[28] = 0;
      nextValArr[29] = num;
    }
    nextValArr[id] = num;
    setValArr(nextValArr);
  };

  return (
    <input
      type="number"
      maxlength="4"
      value={valArr[id]}
      onChange={saveValue}
    ></input>
  );
}

function ScoreInputTable({ valArr, setValArr }) {
  return (
    <>
      <div className="container">
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
              <td className="perfectCol breakPerfectCol">
                <ScoreInputBox id={21} valArr={valArr} setValArr={setValArr} />
              </td>
              <td className="greatCol breakGreatCol">
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
      </div>
      <div className="container breakInfo">
        <table className="addtionalScoreTable">
          <thead></thead>
          <tbody>
            <tr className="touchRow">
              <td scope="col" className="noteName">
                PERFECT (75%)
              </td>
              <td scope="col" className="perfectCol breakPerfectCol">
                <ScoreInputBox id={25} valArr={valArr} setValArr={setValArr} />
              </td>
              <td scope="col" className="greatCol breakGreatCol">
                <ScoreInputBox id={27} valArr={valArr} setValArr={setValArr} />
              </td>
              <td scope="col" className="noteName">
                GREAT (80%)
              </td>
            </tr>
            <tr className="tapRow">
              <td scope="col" className="noteName">
                PERFECT (50%)
              </td>
              <td scope="col" className="perfectCol breakPerfectCol">
                <ScoreInputBox id={26} valArr={valArr} setValArr={setValArr} />
              </td>
              <td scope="col" className="greatCol breakGreatCol">
                <ScoreInputBox id={28} valArr={valArr} setValArr={setValArr} />
              </td>
              <td scope="col" className="noteName">
                GREAT (60%)
              </td>
            </tr>
            <tr className="touchRow">
              <td scope="col" colSpan="2" className="emptyCol"></td>
              <td scope="col" className="greatCol breakGreatCol">
                <ScoreInputBox id={29} valArr={valArr} setValArr={setValArr} />
              </td>
              <td scope="col" className="noteName">
                GREAT (50%)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ScoreInputTable;
