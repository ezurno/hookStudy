import { useEffect, useRef } from "react";

export default function UseFadeInHook() {
  const h1Opacity = useFadeInHook(1);
  const pOpacity = useFadeInHook(3);
  return (
    <div>
      <h1 {...h1Opacity}>Hi</h1>
      <p {...pOpacity}>I'm fade-in hook.</p>
    </div>
  );
}

function useFadeInHook(duration = 1) {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    } else return;
  }, []);

  return { ref: element, style: { opacity: "0" } };
}
