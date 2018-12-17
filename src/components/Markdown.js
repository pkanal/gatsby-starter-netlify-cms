import React from "react";
import Remarkable from "remarkable";

const md = new Remarkable();

export const Markdown = ({ body }) => (
  <div dangerouslySetInnerHTML={{ __html: md.render(body) }} />
);
