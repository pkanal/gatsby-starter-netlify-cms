import React from "react";
import { Link } from "gatsby";

import bridgeLogo from "../img/bridge-logo.svg";

export const Header = ({ heading, backgroundImage }) => (
  <header
    class="tc-l ph3 flex flex-column items-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div class="pv3 display flex justify-center">
      <Link href="#" class="dib w-40">
        <img src={bridgeLogo} />
      </Link>
    </div>
    <h2 class="f3 fw7 mt3 mb5 purple">{heading}</h2>
    <div class="flex flex-row-ns flex-column w-50 justify-around">
      <Link
        id="partner-cta-top"
        class="f4-ns f5 no-underline grow v-mid bg-white pink ph4 pv3 mb3 ba bw1"
        href="mailto:hello@bridgeschool.io"
      >
        Become a Sponsor
      </Link>
    </div>
  </header>
);
