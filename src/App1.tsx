import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {useMousePosition} from "./useMousePosition-3";

function App() {
  const [spinning, setSpinning] = useState(false);
  const time = new Date().getTime();
  useMousePosition(([, y]) => {
    console.log(time);
    setSpinning(y > 100);
  });

  return <img src={reactLogo} className={`logo ${spinning ? "spin" : ""}`} />;
}

export default App;
