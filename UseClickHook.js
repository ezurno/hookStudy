import { useEffect, useRef } from "react";

export default function UseClickHook() {
  const sayHello = () => {
    console.log("Hello!");
  };
  const eventer = useClick(sayHello);

  return (
    <div>
      <h1 ref={eventer}>Click hook</h1>
      {/* h1에 ref 을 넣어 eventer 지정 */}
    </div>
  );
}

function useClick(event) {
  const ref = useRef();
  // useRef으로 주소값을 지정 함

  useEffect(() => {
    const element = ref;
    //useEffect 의 생명주기 때문에 따로 받아서 써야 함
    if (typeof event !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", event);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", event);
      } //중복으로 event를 넣는걸 방지 하기 위해 함수 종료시 삭제
    };
  });

  return ref;
}
