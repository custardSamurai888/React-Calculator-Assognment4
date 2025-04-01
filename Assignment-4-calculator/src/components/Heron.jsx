import { useState } from "react";

function Heron() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [heronResult, setHeronResult] = useState("");

  function calculateHeron() {
    if (a > 0 && b > 0 && c > 0) {
      let square = Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2);
      let area = 0.25 * Math.sqrt(4 * Math.pow(a, 2) * Math.pow(b, 2) - Math.pow(square, 2));
      setHeronResult(area.toFixed(3));
    } else {
      setHeronResult("Invalid input");
    }
  }

  return (
    <div className="card">
      <h3>Heron's Formula</h3>
      <label>Side a:</label>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <label>Side b:</label>
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <label>Side c:</label>
      <input type="number" value={c} onChange={(e) => setC(e.target.value)} />
      <label>Area (Result):</label>
      <input type="text" value={heronResult} readOnly />
      <button onClick={calculateHeron}>Calculate</button>
    </div>
  );
}

export default Heron;
