import { useEffect, useState } from "react";

export default function UseTitleHook() {
  const titleSetter = useTitle("Loading...");
  setTimeout(() => titleSetter("Completed"), 5000);

  return (
    <div>
      <h1>Title Hook</h1>
    </div>
  );
}

function useTitle(initialTitle) {
  const [title, setTitle] = useState(initialTitle);
  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }, [title]);

  return setTitle;
}
