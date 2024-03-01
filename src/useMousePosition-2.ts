import {useEffect} from "react";

type Pos = [x: number, y: number];

export const useMousePosition = (onMove: (pos: Pos) => void) => {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      onMove([e.clientX, e.clientY]);
    };
    console.log("SETUP LISTENER");
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [onMove]);
};

// const [spinning, setSpinning] = useState(false);
//   const time = new Date().getTime();
//   useMousePosition(([, y]) => {
//     console.log(time)
//     setSpinning(y > 100)
//   });
