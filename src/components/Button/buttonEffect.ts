import { MouseEvent } from "react";

interface ButtonEffect {
  x: number;
  y: number;
  size: number;
}

const createEffect = (
  event: MouseEvent<HTMLElement>,
  containerRef: React.RefObject<HTMLElement>,
  setRipples: React.Dispatch<React.SetStateAction<ButtonEffect[]>>
) => {
  const rect = containerRef.current!.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  const newRipple = { x, y, size };
  setRipples((prevRipples) => [...prevRipples, newRipple]);

  setTimeout(() => {
    setRipples((currentRipples) =>
      currentRipples.filter((r) => r !== newRipple)
    );
  }, 600);
};

export default createEffect;
