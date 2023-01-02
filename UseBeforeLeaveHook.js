import { useEffect } from "react";

export default function UseBeforeLeaveHook() {
  const event = () => {
    console.log("don't leave me.");
  };

  useBeforeLeave(event);

  return (
    <div>
      <h1>Before Leave Hook</h1>
    </div>
  );
}

function useBeforeLeave(onBefore) {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);

  if (typeof onBefore !== "function") return;

  const handle = (event) => {
    const { clientY } = event;
    //mouseleva의 clientY를 {}로 가져옴

    if (clientY <= 0) onBefore();
  };
}
