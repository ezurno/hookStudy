export default function UseNotificationHook() {
  const caution = useNotification("Hello", {
    body: "kimchi good",
  });

  return (
    <div>
      <h1>use notification hook</h1>
      <button onClick={caution}>click</button>
    </div>
  );
}

function useNotification(title, options) {
  if (!("Notification" in window)) {
    return;
  } // notification 이 window 창에 없으면 function kill

  const run = () => {
    new Notification(title, options);
  };

  const trigger = () => {
    if (Notification.permission === "granted") {
      run();
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          run();
        } else return;
      });
    }
  };

  return trigger;
}
