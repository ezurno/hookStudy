import { useRef } from "react";

export default function UseFullScreenHook() {
  const checker = (isFull) => {
    console.log(isFull ? "FullScreen" : "not FullScreen");
  };
  const { element, setFullScreen, exitScreen } = useFullScreen(checker);

  return (
    <div>
      <div>
        <h1>FullScreen Hook</h1>
        <img ref={element} src="https://i.ibb.co/R6RwNxx/grape.jpg" />
        <button onClick={exitScreen}>exit</button>
      </div>
      <button onClick={setFullScreen}>full</button>
    </div>
  );
}

function useFullScreen(callback) {
  const element = useRef();

  const check = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    } //현재 상황을 체크해줌 가급적 useState 쓸 것
  };

  const setFullScreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      } // Browser 종류에 따라 작동
    }

    check(true);
  };

  const exitScreen = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    check(false);
  };

  return { element, setFullScreen, exitScreen };
}
