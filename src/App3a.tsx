import {useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Expensive from "./Expensive";

function App() {
  const [count, setCounter] = useState(0);

  return (
    <>
      <img
        src={reactLogo}
        className="logo"
        onMouseEnter={() => setCounter((v) => v + 1)}
      />
      <div>{count}</div>
      <Expensive />
    </>
  );
}

export default App;
