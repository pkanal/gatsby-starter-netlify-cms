import React from "react";
import cx from "classnames";

export const Divider = ({ color = "green", className }) => {
  const dividerClasses = cx(
    `bg-${color}`,
    "tc center bg-green w3 pt1 mt3 mb3",
    className
  );
  return <div className={dividerClasses} />;
};
