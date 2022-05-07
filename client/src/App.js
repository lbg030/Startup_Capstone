import React from "react";
import Main from "./components/Main";

function APP() {
  const imagestyle = {
    height: "10vh",
    width: "10vh",
    // float: "left",
    // border: "1px solid white",
  };

  return (
    <div>
      <html>
        <head>
          <title>SteamPack</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <link rel="stylesheet" href="assets/css/main.css" />
        </head>
        <body className="homepage is-preload">
          <div id="root">
            <div id="page-wrapper">
              <section id="header" className="wrapper">
                <div id="logo">
                  <h1>
                    <img
                      className="logo"
                      alt="logo"
                      src="images/로고.png"
                      style={imagestyle}
                    />
                    <a href="index.html">스팀팩</a>
                  </h1>
                  <p>Steam Community Site</p>
                </div>

                <nav id="nav">
                  {/* <img
                    className="logo"
                    alt="logo"
                    src="images/로고.png"
                    style={imagestyle}
                  />
                  <a href="index.html" style={imagestyle}>
                    스팀팩
                  </a> */}
                  <ul>
                    <li className="current">
                      <a href="index.html">할인 정보</a>
                    </li>
                    <li>
                      <a href="#">게시판</a>
                    </li>
                    <li>
                      <a href="left-sidebar.html">MBTI별 게임 추천</a>
                    </li>
                    <li>
                      <a href="right-sidebar.html">
                        스팀 트렌드 [## 게임 랭킹 ]
                      </a>
                    </li>
                    <li>
                      <a href="no-sidebar.html">No Sidebar</a>
                    </li>
                  </ul>
                </nav>
              </section>

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

              <section id="highlights" className="wrapper style3">
                <div className="title">The Endorsements</div>
                <div className="container">
                  <div className="row aln-center">
                    <div className="col-4 col-12-medium">
                      <section className="highlight">
                        <a href="#" className="image featured">
                          <img src="images/pic02.jpg" alt="" />
                        </a>
                        <h3>
                          <a href="#">Aliquam diam consequat</a>
                        </h3>
                        <p>
                          Eget mattis at, laoreet vel amet sed velit aliquam
                          diam ante, dolor aliquet sit amet vulputate mattis
                          amet laoreet lorem.
                        </p>
                        <ul className="actions">
                          <li>
                            <a href="#" className="button style1">
                              Learn More
                            </a>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="col-4 col-12-medium">
                      <section className="highlight">
                        <a href="#" className="image featured">
                          <img src="images/pic03.jpg" alt="" />
                        </a>
                        <h3>
                          <a href="#">Nisl adipiscing sed lorem</a>
                        </h3>
                        <p>
                          Eget mattis at, laoreet vel amet sed velit aliquam
                          diam ante, dolor aliquet sit amet vulputate mattis
                          amet laoreet lorem.
                        </p>
                        <ul className="actions">
                          <li>
                            <a href="#" className="button style1">
                              Learn More
                            </a>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="col-4 col-12-medium">
                      <section className="highlight">
                        <a href="#" className="image featured">
                          <img src="images/pic04.jpg" alt="" />
                        </a>
                        <h3>
                          <a href="#">Mattis tempus lorem</a>
                        </h3>
                        <p>
                          Eget mattis at, laoreet vel amet sed velit aliquam
                          diam ante, dolor aliquet sit amet vulputate mattis
                          amet laoreet lorem.
                        </p>
                        <ul className="actions">
                          <li>
                            <a href="#" className="button style1">
                              Learn More
                            </a>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </section>

              <section id="footer" className="wrapper">
                <div className="title">The Rest Of It</div>
                <div className="container">
                  <header className="style1">
                    <h2>Ipsum sapien elementum portitor?</h2>
                    <p>
                      Sed turpis tortor, tincidunt sed ornare in metus porttitor
                      mollis nunc in aliquet.
                      <br />
                      Nam pharetra laoreet imperdiet volutpat etiam feugiat.
                    </p>
                  </header>
                  <div className="row">
                    <div className="col-6 col-12-medium">
                      <section>
                        <form method="post" action="#">
                          <div className="row gtr-50">
                            <div className="col-6 col-12-small">
                              <input
                                type="text"
                                name="name"
                                id="contact-name"
                                placeholder="Name"
                              />
                            </div>
                            <div className="col-6 col-12-small">
                              <input
                                type="text"
                                name="email"
                                id="contact-email"
                                placeholder="Email"
                              />
                            </div>
                            <div className="col-12">
                              <textarea
                                name="message"
                                id="contact-message"
                                placeholder="Message"
                                rows="4"
                              ></textarea>
                            </div>
                            <div className="col-12">
                              <ul className="actions">
                                <li>
                                  <input
                                    type="submit"
                                    className="style1"
                                    value="Send"
                                  />
                                </li>
                                <li>
                                  <input
                                    type="reset"
                                    className="style2"
                                    value="Reset"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </form>
                      </section>
                    </div>
                    <div className="col-6 col-12-medium">
                      <section className="feature-list small">
                        <div className="row">
                          <div className="col-6 col-12-small">
                            <section>
                              <h3 className="icon solid fa-home">
                                Mailing Address
                              </h3>
                              <p>
                                Untitled Corp
                                <br />
                                1234 Somewhere Rd
                                <br />
                                Nashville, TN 00000
                              </p>
                            </section>
                          </div>
                          <div className="col-6 col-12-small">
                            <section>
                              <h3 className="icon solid fa-comment">Social</h3>
                              <p>
                                <a href="#">@untitled-corp</a>
                                <br />
                                <a href="#">linkedin.com/untitled</a>
                                <br />
                                <a href="#">facebook.com/untitled</a>
                              </p>
                            </section>
                          </div>
                          <div className="col-6 col-12-small">
                            <section>
                              <h3 className="icon solid fa-envelope">Email</h3>
                              <p>
                                <a href="#">info@untitled.tld</a>
                              </p>
                            </section>
                          </div>
                          <div className="col-6 col-12-small">
                            <section>
                              <h3 className="icon solid fa-phone">Phone</h3>
                              <p>(000) 555-0000</p>
                            </section>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div id="copyright">
                    <ul>
                      <li>&copy; Untitled.</li>
                      <li>
                        Design: <a href="http://html5up.net">HTML5 UP</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/jquery.dropotron.min.js"></script>
            <script src="assets/js/browser.min.js"></script>
            <script src="assets/js/breakpoints.min.js"></script>
            <script src="assets/js/util.js"></script>
            <script src="assets/js/main.js"></script>
          </div>
        </body>
      </html>
      <Main />
    </div>
  );
}

export default APP;
