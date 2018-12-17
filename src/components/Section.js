import React from "react";

import { Markdown } from "./Markdown";

export const Section = ({ body, title, children }) => {
  return (
    <section className="libre-baskerville lh-2 f5 center bt b--black-10 pv3 ph4 ph5-m ph6-l items-center flex flex-column justify-center">
      <h3 className="p3 open-sans lh-title f2 mt0 mb2 tc mt4">{title}</h3>
      <div className="tc center bg-green w3 pt1 mt3 mb3" />
      {body && <Markdown body={body} />}
      {children}
    </section>
  );
};
