import { useState } from "react";

export default function UseTabHook() {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div>
      {content.map((section, index) => (
        <button key={section.id} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
        // map 사용 시 각각 고유 key 값을 주어야 함
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

const useTabs = (initialTab, allTab) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTab || !Array.isArray(allTab)) {
    return;
    //검증 구간
  }
  return {
    currentItem: allTab[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const content = [
  {
    id: 1,
    tab: "Section 1",
    content: "hello I'm 1",
  },

  {
    id: 2,
    tab: "Section 2",
    content: "hello I'm 2",
  },
];
//Json 형식
