import React from "react";

import { Section } from "./Section";
import { Heading } from "./Heading";
import { Divider } from "./Divider";
import { Markdown } from "./Markdown";

export const ContentSection = ({
  title,
  body,
  theme = { bgColor: "near-white", color: "black", headingColor: "blue" }
}) => (
  <Section bgColor={theme.bgColor} color={theme.color}>
    <Heading color={theme.headingColor}>{title}</Heading>
    <Divider />
    <Markdown body={body} />
  </Section>
);
