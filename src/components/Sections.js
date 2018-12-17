import React from "react";

import { Section } from "./Section";

export const Sections = ({ sections }) => (
  <>
    {sections.map((section, i) => {
      const style = i % 2 === 0 ? "primary" : "secondary";
      return <Section {...section} style={style} />;
    })}
  </>
);
