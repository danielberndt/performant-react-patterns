import {useEffect, useRef} from "react";

type Pos = [x: number, y: number];

export const useMousePosition = (onMove: (pos: Pos) => void) => {
  const onMoveRef = useRef(onMove);

  useEffect(() => {
    onMoveRef.current = onMove;
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      onMoveRef.current([e.clientX, e.clientY]);
    };
    console.log("SETUP LISTENER");
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
};
