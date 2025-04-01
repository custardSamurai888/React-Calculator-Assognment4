import { useState } from "react";

function Ambiguous() {
  const [angleA, setAngleA] = useState("");
  const [sideAamb, setSideAamb] = useState("");
  const [sideBamb, setSideBamb] = useState("");
  const [ambiguousResult, setAmbiguousResult] = useState("");

  function calculateAmbiguous() {
    let h = sideBamb * Math.sin(angleA);
    if (angleA <= 0 || sideAamb <= 0 || sideBamb <= 0) {
      setAmbiguousResult("Invalid input");
    } else if (sideAamb === h) {
      setAmbiguousResult("Right Triangle");
    } else if (sideAamb > h) {
      setAmbiguousResult(sideAamb > sideBamb ? "One Triangle" : "Two triangles: ambiguous case");
    } else {
      setAmbiguousResult("No Triangle");
    }
  }

  return (
    <div className="card">
      <h3>Ambiguous Case</h3>
      <label>Angle A:</label>
      <input type="number" value={angleA} onChange={(e) => setAngleA(e.target.value)} />
      <label>Side a:</label>
      <input type="number" value={sideAamb} onChange={(e) => setSideAamb(e.target.value)} />
      <label>Side b:</label>
      <input type="number" value={sideBamb} onChange={(e) => setSideBamb(e.target.value)} />
      <label>Triangle Type (Result):</label>
      <input type="text" value={ambiguousResult} readOnly />
      <button onClick={calculateAmbiguous}>Calculate</button>
    </div>
  );
}

export default Ambiguous;
