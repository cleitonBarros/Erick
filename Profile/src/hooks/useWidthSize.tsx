import { useEffect, useState } from "react";

export function UseWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const Resize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", Resize);
  }, []);
  return size;
}
