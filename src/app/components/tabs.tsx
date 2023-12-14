"use client";

import { useState } from "react";
import { tv } from "tailwind-variants";

export default function Tabs() {
  const [tabState, setTabState] = useState<"detail" | "comparison">("detail");
  const { background } = tbs();
  const changeTab = (tab: "detail" | "comparison") => {
    setTabState(tab);
  };
  return (
    <>
      <div className={background()}>
        <button
          className={btn({ isClicked: tabState === "detail" })}
          onClick={() => changeTab("detail")}
        >
          상세 리뷰
        </button>
        <button
          className={btn({ isClicked: tabState === "comparison" })}
          onClick={() => changeTab("comparison")}
        >
          비교 리뷰
        </button>
      </div>
    </>
  );
}

const tbs = tv({
  slots: {
    background: "w-80 bg-gray-200 rounded-full p-1 flex",
  },
});

const btn = tv({
  base: "w-full rounded-full bg-gray-200 text-base font-semibold text-gray-500 py-2 px-1",
  variants: {
    isClicked: {
      true: "bg-white text-gray-700",
    },
  },
});
