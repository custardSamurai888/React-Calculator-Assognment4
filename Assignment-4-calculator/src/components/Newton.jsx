import { useState } from "react";

function Newton() {
  const [rootGuess, setRootGuess] = useState("");
  const [newtonResult, setNewtonResult] = useState("");

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

  return (
    <div className="card">
      <h3>Newton's Method</h3>
      <label>Root Guess:</label>
      <input type="number" value={rootGuess} onChange={(e) => setRootGuess(e.target.value)} />
      <label>Root Approximation (Result):</label>
      <input type="text" value={newtonResult} readOnly />
      <button onClick={calculateNewton}>Calculate</button>
    </div>
  );
}

export default Newton;
