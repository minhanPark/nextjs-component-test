"use client";

import { tv } from "tailwind-variants";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useId, Fragment } from "react";

type Props = {
  children: React.ReactNode;
  text: string;
  direction?: "top" | "bottom" | "left" | "right";
};

export default function Tooltip({ children, text, direction = "top" }: Props) {
  const { tooltipText } = tooltip();
  const id = useId();
  return (
    <>
      <div data-tooltip-id={id}>{children}</div>
      <ReactTooltip id={id} place={direction}>
        <div className={tooltipText()}>{text}</div>
      </ReactTooltip>
    </>
  );
}

const tooltip = tv({
  slots: {
    tooltipText: "text-sm font-medium text-white rounded-lg shadow-sm",
  },
});
