import { useEffect, useState } from "react";

export default function UseScrollHook() {
  const { y } = useScrollHook();

  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 300 ? "red" : "blue" }}>
        Scroll hook
      </h1>
    </div>
  ); // scroll hook  h1 을 고정하기 위함
}

function useScrollHook() {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}
