import React from "react";

const Footer = () => (
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
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.dropotron.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>
  </section>
);

export default Footer;