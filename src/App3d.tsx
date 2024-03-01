import {ReactNode, useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Expensive from "./Expensive";

const Wrapper = (props: {children: ReactNode}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{background: active ? "yellow" : "transparent", padding: 10}}
    >
      <img src={reactLogo} className="logo" />
      {props.children}
    </div>
  );
};

function App() {
  return (
    <Wrapper>
      <Expensive />
    </Wrapper>
  );
}

export default App;
