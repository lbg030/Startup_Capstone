import React from "react";
import '../assets/css/main.css';
const MainContent = () => (
  <section id="main" className="wrapper style2">
    <div className="title">The Details</div>
    <div className="container">
      <a href="#" className="image featured">
        <img src="images/pic01.jpg" alt="" />
      </a>
      <section id="features">
        <header className="style1">
          <h2>Dolor consequat feugiat amet veroeros</h2>
          <p>Feugiat dolor nullam orci pretium phasellus justo</p>
        </header>
        <div className="feature-list">
          <div className="row">
            <div className="col-6 col-12-medium">
              <section>
                <h3 className="icon fa-comment">
                  Mattis velit diam vulputate
                </h3>
                <p>
                  Eget mattis at, laoreet vel et velit aliquam diam
                  ante, aliquet sit amet vulputate et magna feugiat
                  laoreet vel velit lorem.
                </p>
              </section>
            </div>
            <div className="col-6 col-12-medium">
              <section>
                <h3 className="icon solid fa-sync">
                  Lorem ipsum dolor sit veroeros
                </h3>
                <p>
                  Eget mattis at, laoreet vel et velit aliquam diam
                  ante, aliquet sit amet vulputate et magna feugiat
                  laoreet vel velit lorem.
                </p>
              </section>
            </div>
            <div className="col-6 col-12-medium">
              <section>
                <h3 className="icon fa-image">
                  Pretium phasellus justo lorem
                </h3>
                <p>
                  Eget mattis at, laoreet vel et velit aliquam diam
                  ante, aliquet sit amet vulputate et magna feugiat
                  laoreet vel velit lorem.
                </p>
              </section>
            </div>
            <div className="col-6 col-12-medium">
              <section>
                <h3 className="icon solid fa-cog">
                  Tempus sed pretium orci
                </h3>
                <p>
                  Eget mattis at, laoreet vel et velit aliquam diam
                  ante, aliquet sit amet vulputate et magna feugiat
                  laoreet vel velit lorem.
                </p>
              </section>
            </div>
            <div className="col-6 col-12-medium">
              <section>
                <h3 className="icon solid fa-wrench">
                  Aliquam consequat et feugiat
                </h3>
                <p>
                  Eget mattis at, laoreet vel et velit aliquam diam
                  ante, aliquet sit amet vulputate et magna feugiat
                  laoreet vel velit lorem.
                </p>
              </section>
            </div>
            <div className="col-6 col-12-medium">
              <section>
                <h3 className="icon solid fa-check">
                  Dolore laoreet aliquam mattis
                </h3>
                <p>
                  Eget mattis at, laoreet vel et velit aliquam diam
                  ante, aliquet sit amet vulputate et magna feugiat
                  laoreet vel velit lorem.
                </p>
              </section>
            </div>
          </div>
        </div>
        <ul className="actions special">
          <li>
            <a href="#" className="button style1 large">
              Get Started
            </a>
          </li>
          <li>
            <a href="#" className="button style2 large">
              More Info
            </a>
          </li>
        </ul>
      </section>
    </div>
  </section>
);

export default MainContent;
