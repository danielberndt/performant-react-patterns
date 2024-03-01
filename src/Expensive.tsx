import {useEffect, useRef} from "react";
import expensiveImg from "./assets/expensive.png";

const Expensive = () => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    nodeRef.current!.classList.add("thinking");
    const timeoutId = setTimeout(
      () => nodeRef.current!.classList.remove("thinking"),
      2000
    );
    return () => {
      clearTimeout(timeoutId);
    };
  });
  return (
    <div ref={nodeRef} id="expensive">
      <img src={expensiveImg} />
    </div>
  );
};

export default Expensive;
