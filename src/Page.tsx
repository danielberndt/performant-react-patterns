import {ReactNode} from "react";
import "./App.css";

export const Header = ({onToggleNav}: {onToggleNav: () => void}) => {
  return (
    <div
      style={{
        background: "#eee",
        padding: 20,
      }}
    >
      <button onClick={onToggleNav}>Toggle Nav</button>
    </div>
  );
};

export const Nav = () => {
  return (
    <div style={{padding: 20, background: "#fafafa"}}>
      <div>Nav</div>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
      </ul>
    </div>
  );
};

export const Page = ({children}: {children: ReactNode}) => (
  <div style={{display: "flex", gap: 20}}>{children}</div>
);
