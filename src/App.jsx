import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [oldNumber, setOldNumber] = useState("");
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    setNumber(number + input);
  }

  function operatorHandler(e) {
    var operatorFunction = e.target.value;
    setOperator(operatorFunction);
    setOldNumber(number);
    setNumber("");
  }

  function calculate() {
    if (operator == "/") {
      setNumber(parseFloat(oldNumber) / parseFloat(number));
    } else if (operator == "*") {
      setNumber(parseFloat(oldNumber) * parseFloat(number));
    } else if (operator == "+") {
      setNumber(parseFloat(oldNumber) + parseFloat(number));
    } else if (operator == "-") {
      setNumber(parseFloat(oldNumber) - parseFloat(number));
    } else {
      setNumber(0);
    }
  }

  function clearNum() {
    setNumber("");
  }

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" className="numbersInput" value={number} />
        <div className="buttonsContainer">
          <div className="numbersButtons">
            <button value={1} onClick={inputNum}>
              1
            </button>
            <button value={2} onClick={inputNum}>
              2
            </button>
            <button value={3} onClick={inputNum}>
              3
            </button>
            <button value={4} onClick={inputNum}>
              4
            </button>
            <button value={5} onClick={inputNum}>
              5
            </button>
            <button value={6} onClick={inputNum}>
              6
            </button>
            <button value={7} onClick={inputNum}>
              7
            </button>
            <button value={8} onClick={inputNum}>
              8
            </button>
            <button value={9} onClick={inputNum}>
              9
            </button>
            <button value={0} onClick={clearNum}>
              AC
            </button>
            <button value={0} onClick={inputNum} className="zero">
              0
            </button>
          </div>
          <div className="operationButtons">
            <button onClick={operatorHandler} value={"+"}>
              +
            </button>
            <button onClick={operatorHandler} value={"-"}>
              -
            </button>
            <button onClick={operatorHandler} value={"/"}>
              /
            </button>
            <button onClick={operatorHandler} value={"*"}>
              *
            </button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
