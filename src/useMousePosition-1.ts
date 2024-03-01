import {useEffect, useState} from "react";

export const useMousePosition = () => {
  const [pos, setPos] = useState<[x: number, y: number]>([0, 0]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos([e.clientX, e.clientY]);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return pos;
};

// const [, y] = useMousePosition();
//   const [spinning, setSpinning] = useState(false);

//   useEffect(() => {
//     setSpinning(y > 100)
//   }, [y])
