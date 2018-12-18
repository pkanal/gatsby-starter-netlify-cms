import React from "react";
import cx from "classnames";

export const Section = ({
  children,
  bgColor = "bg-near-white",
  color = "black",
  img,
  className
}) => {
  const sectionClasses = cx(
    `bg-${bgColor}`,
    color,
    "libre-baskerville lh-2 f5 center bt b--black-10 pv3 ph4 ph5-m ph6-l items-center flex flex-column justify-center",
    className
  );
  return (
    <section
      className={sectionClasses}
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
    </section>
  );
};
