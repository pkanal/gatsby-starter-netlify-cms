import React from "react";
import cx from "classnames";

export const Heading = ({ children, level = 2, color, className }) => {
  const headingClasses = cx(
    color,
    "p3 open-sans lh-title f2 mt0 mb2 tc mt4",
    className
  );
  const HeadingLevel = `h${level}`;
  return <HeadingLevel className={headingClasses}>{children}</HeadingLevel>;
};
