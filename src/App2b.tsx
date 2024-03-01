import {useRef} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {useMousePosition} from "./useMousePosition-3";

function App() {
  const nodeRef = useRef<HTMLImageElement | null>(null);

  useMousePosition(([x]) => {
    nodeRef.current!.style.left = `${x / 4}px`;
  });

  return <img src={reactLogo} className="logo" ref={nodeRef} />;
}

export default App;
