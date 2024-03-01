import {useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Expensive from "./Expensive";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{background: active ? "yellow" : "transparent", padding: 10}}
    >
      <img src={reactLogo} className="logo" />
      <Expensive />
    </div>
  );
}

export default App;
