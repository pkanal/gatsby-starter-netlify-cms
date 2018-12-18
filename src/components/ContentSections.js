import React from "react";

import { ContentSection } from "./ContentSection.js";

export const ContentSections = ({
  sections,
  primaryTheme = {
    bgColor: "bg-near-white",
    color: "black",
    headingColor: "blue"
  },
  secondaryTheme = { bgColor: "blue", color: "white", headingColor: "white" }
}) => (
  <>
    {sections.map((section, i) => {
      const theme = i % 2 === 0 ? primaryTheme : secondaryTheme;
      return <ContentSection theme={theme} {...section} />;
    })}
  </>
);
