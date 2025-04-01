import { useState } from 'react';
import './calculator.css';

function Calculator() {
  const [heronResult, setHeronResult] = useState("");
  const [angleA, setAngleA] = useState("");
  const [sideAamb, setSideAamb] = useState("");
  const [sideBamb, setSideBamb] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [ambiguousResult, setAmbiguousResult] = useState("");
  const [rootGuess, setRootGuess] = useState("");
  const [newtonResult, setNewtonResult] = useState("");
  const [coefficients, setCoefficients] = useState("");
  const [exponents, setExponents] = useState("");
  const [xValue, setXValue] = useState("");
  const [polyFunction, setPolyFunction] = useState("");
  const [polyResult, setPolyResult] = useState("");

  function calculateHeron() {
    if (a > 0 && b > 0 && c > 0) {
      let square = Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2);
      let area = 0.25 * Math.sqrt(4 * Math.pow(a, 2) * Math.pow(b, 2) - Math.pow(square, 2));
      setHeronResult(area.toFixed(3));
    } else {
      setHeronResult("Invalid input");
    }
  }

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

  function calculateNewton() {
    let x0 = parseFloat(rootGuess);
    function f(x) {
      return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
    }
    function f_derivative(x) {
      return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
    }
    if (!isNaN(x0)) {
      let tolerance = 0.001;
      let x1;
      let maxIterations = 100;
      let iterations = 0;
      do {
        if (f_derivative(x0) === 0) {
          setNewtonResult("Divide by zero error");
          return;
        }
        x1 = x0 - f(x0) / f_derivative(x0);
        x0 = x1;
        iterations++;
        if (iterations > maxIterations) {
          setNewtonResult("Number is too big, try again");
          return;
        }
      } while (Math.abs(f(x1)) > tolerance);
      setNewtonResult(x1.toFixed(4));
    } else {
      setNewtonResult("Invalid input");
    }
  }

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
    <div className="container">
      <div className="card">
        <h3>Heron's Formula</h3>
        <label for="a">Side a:</label>
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
        <label for="b">Side b:</label>
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
        <label for="c">Side c:</label>
        <input type="number" value={c} onChange={(e) => setC(e.target.value)} />
        <label for="heronResult">Area (Result):</label>
        <input type='text' value={heronResult} placeholder="Heron's Result" readOnly/>
        <button onClick={calculateHeron}>Calculate</button>
        
      </div>
      <div className="card">
        <h3>Ambiguous Case</h3>
        <label for="angleA">Angle A:</label>
        <input type="number" value={angleA} onChange={(e) => setAngleA(e.target.value)}  />
        <label for="sideAamd">Side a:</label>
        <input type="number" value={sideAamb} onChange={(e) => setSideAamb(e.target.value)}/>
        <label for="sidebamd">Side b:</label>
        <input type="number" value={sideBamb} onChange={(e) => setSideBamb(e.target.value)} />
        <label for="ambiguousResult">Triangle Type (Result):</label>
        <input type='text' value={ambiguousResult} readOnly/>
        <button onClick={calculateAmbiguous}>Calculate</button>
        
      </div>
     
      <div className="card">
        <h3>Newton's Method</h3>
        <label for="rootGuess">Root Guess:</label>
        <input type="number" value={rootGuess} onChange={(e) => setRootGuess(e.target.value)}  />
        <label for="newtonResult">Root Approximation (Result):</label>
        <input type='text' value={newtonResult}readOnly/>
        <button onClick={calculateNewton}>Calculate</button>
        
      </div>
      <div className="card">
        <h3>Polynomial Function</h3>
        <label for="coefficients">Coefficients:</label>
        <input type="text" value={coefficients} onChange={(e) => setCoefficients(e.target.value)} placeholder="Separate by one space" />
        <label for="exponents">Exponents:</label>
        <input type="text" value={exponents} onChange={(e) => setExponents(e.target.value)} placeholder="Separate by one space" />
        <label for="xValue">X Value:</label>
        <input type="number" value={xValue} onChange={(e) => setXValue(e.target.value)} />
        <label for="polyResult">Polynomial Function:</label>
        <input type='text' value={polyFunction} readOnly />
        <label for="polyResult">Polynomial Result:</label>
        <input type='text' value={polyResult} readOnly/>
        <button onClick={calculatePolynomial}>Calculate</button>
      
      </div>
    </div>
  );
}

export default Calculator;
