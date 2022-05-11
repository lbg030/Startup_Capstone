import React from "react";
import '../assets/css/main.css';
const Intro = () => (
  <section id="intro" className="wrapper style1">
    <div className="title">The Introduction</div>
    <div className="container">
      <p className="style1">
        So in case you were wondering what this is all about ...
      </p>
      <p className="style2">
        Escape Velocity is a free responsive
        <br className="mobile-hide" />
        site template by{" "}
        <a href="http://html5up.net" className="nobr">
          HTML5 UP
        </a>
      </p>
      <p className="style3">
        It's <strong>responsive</strong>, built on{" "}
        <strong>HTML5</strong> and <strong>CSS3</strong>, and
        released for free under the{" "}
        <a href="http://html5up.net/license">
          Creative Commons Attribution 3.0 license
        </a>
        , so use it for any of your personal or commercial projects
        &ndash; just be sure to credit us!
      </p>
      <ul className="actions">
        <li>
          <a href="#" className="button style3 large">
            Proceed
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Intro;
