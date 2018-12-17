import React from "react";
import { Link } from "gatsby";
import bridgeLogo from "../img/bridge-logo.svg";

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <nav class="flex items-center justify-between w-100 mw8 center">
        <div class="v-mid pa3">
          <Link href="#" class="dib w3 h2 pa1">
            <img src={bridgeLogo} />
          </Link>
        </div>
        <div class="flex flex-column flex-row-ns items-center v-mid tr pa3">
          <Link
            class="f6 fw4 blue hover-pink no-underline dib pv2 ph3 mb2 mb0-ns"
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            class="f6 fw4 blue hover-pink no-underline ml2 pv2 ph3 ba bw1 mb2 mb0-ns"
            href="/apply-dev"
          >
            Apply for Development
          </Link>
          <Link
            class="f6 fw4 blue hover-pink no-underline ml2 pv2 ph3 ba bw1 mb2 mb0-ns"
            href="/apply-design"
          >
            Apply for Design
          </Link>
          <Link
            class="f6 fw4 green hover-pink no-underline ml2 pv2 ph3 ba bw1 mb2 mb0-ns"
            href="#donate"
          >
            Donate
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
