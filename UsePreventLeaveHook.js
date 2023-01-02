export default function UsePreventLeaveHook() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <h1>Prevent Hook</h1>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
}

function usePreventLeave() {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };

  return { enablePrevent, disablePrevent };
}
