import "./Calculator.css";
import Heron from "./Heron";
import Ambiguous from "./Ambiguous";
import Newton from "./Newton";
import Polynomial from "./Polynomial";

function Calculator() {
  return (
    <div className="container">
      <Heron />
      <Ambiguous />
      <Newton />
      <Polynomial />
    </div>
  );
}

export default Calculator;
