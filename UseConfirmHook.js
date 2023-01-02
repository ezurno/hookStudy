// user가 무언가를 하기 전 확인 메세지

export default function UseConfirmHook() {
  const deleteWord = () => {
    console.log("delete");
  };
  const abort = () => {
    console.log("abort");
  };

  const confirmDelete = useConfirm("delete?", deleteWord, abort);

  return (
    <div>
      <h1>Confirm Hook</h1>
      <button onClick={confirmDelete}>Click here</button>
    </div>
  );
}

const useConfirm = (message = "", onAccept, onCancel) => {
  if (onAccept && typeof onAccept !== "function") return;
  if (onCancel && typeof onCancel !== "function") return;
  // 매개변수 검증

  const confirmAction = () => {
    if (window.confirm(message)) {
      onAccept();
      // window confirm 창에서 수락을 누르면 true, 취소를 누르면 false
    } else onCancel();
  };
  return confirmAction;
};
