import { useEffect, useState } from "react";

export default function UseNetworkHook() {
  const online = useNetworkHook();

  return (
    <div>
      <h1>Network hook</h1>
      <h1>{online ? "online" : "offline"}</h1>
    </div>
  );
}

function useNetworkHook() {
  const [status, setStatus] = useState(navigator.onLine);
  //window 창의 online 여부를 boolean type return

  const onChange = () => {
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", onChange);
    window.addEventListener("offline", onChange);

    return () => {
      window.removeEventListener("online", onChange);
      window.removeEventListener("offline", onChange);
    };
  }, []);

  return status;
}
