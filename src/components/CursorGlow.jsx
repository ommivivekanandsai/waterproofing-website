import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="hidden md:block fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(
          300px circle at ${position.x}px ${position.y}px,
          rgba(37,99,235,0.12),
          transparent 40%
        )`,
      }}
    />
  );
}

export default CursorGlow;