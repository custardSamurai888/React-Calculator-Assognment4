import "./components/Calculator.css";
import Heron from "./components/Heron";
import Ambiguous from "./components/Ambiguous";
import Newton from "./components/Newton";
import Polynomial from "./components/Polynomial";


function App() {
  

  return (
    <div className="container">
    <>
      <Heron />
      <Ambiguous />
      <Newton />
      <Polynomial />
    </>
    </div>
  );
  
}

export default App
