import { useState } from "react";

function Polynomial() {
  const [coefficients, setCoefficients] = useState("");
  const [exponents, setExponents] = useState("");
  const [xValue, setXValue] = useState("");
  const [polyFunction, setPolyFunction] = useState("");
  const [polyResult, setPolyResult] = useState("");

  function calculatePolynomial() {
    let coeffs = coefficients.split(' ').map(Number);
    let exps = exponents.split(' ').map(Number);
    let x = parseFloat(xValue);
    if (!isNaN(x) && coeffs.length === exps.length) {
      let ans = 0;
      let polyFunc = "";
      for (let i = 0; i < coeffs.length; i++) {
        ans += coeffs[i] * Math.pow(x, exps[i]);
        polyFunc += `${coeffs[i]}x^${exps[i]} `;
        if (i < coeffs.length - 1) polyFunc += "+ ";
      }
      setPolyFunction(polyFunc.trim());
      setPolyResult(ans.toFixed(2));
    } else {
      setPolyFunction("Invalid input");
      setPolyResult("Invalid input");
    }
  }

  return (
    <div className="card">
      <h3>Polynomial Function</h3>
      <label>Coefficients:</label>
      <input type="text" value={coefficients} onChange={(e) => setCoefficients(e.target.value)} />
      <label>Exponents:</label>
      <input type="text" value={exponents} onChange={(e) => setExponents(e.target.value)} />
      <label>X Value:</label>
      <input type="number" value={xValue} onChange={(e) => setXValue(e.target.value)} />
      <label>Polynomial Function:</label>
      <input type="text" value={polyFunction} readOnly />
      <label>Polynomial Result:</label>
      <input type="text" value={polyResult} readOnly />
      <button onClick={calculatePolynomial}>Calculate</button>
    </div>
  );
}

export default Polynomial;
