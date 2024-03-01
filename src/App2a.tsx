import {useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {useMousePosition} from "./useMousePosition-3";

function App() {
  const [x, setX] = useState(0);
  useMousePosition(([x]) => {
    setX(x / 4);
  });

  return <img src={reactLogo} className="logo" style={{left: x}} />;
}

export default App;
