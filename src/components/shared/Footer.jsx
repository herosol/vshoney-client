import React from "react";
import Text from "../common/Text";
import { Link } from "react-router-dom";

const Footer = ({ site_settings }) => {
  return (
    <>
      <section className="popup pricing_popup" data-popup="filter">
        <div className="tableDv">
          <div className="tableCell">
            <div className="_inner">
              <div className="crosBtn" />
              <form action>
                <div className="inner">
                  <h4>job type</h4>
                  <div className="type_list">
                    <div className="lblBtn">
                      <div className="switchBtn">
                        <input type="checkbox" name id="part-time" />
                      </div>
                      <label htmlFor="part-time">Part Time</label>
                    </div>
                    <div className="lblBtn">
                      <div className="switchBtn">
                        <input
                          type="checkbox"
                          name
                          id="full-time"
                          defaultChecked
                        />
                      </div>
                      <label htmlFor="full-time">Full Time</label>
                    </div>
                    <div className="lblBtn">
                      <div className="switchBtn">
                        <input type="checkbox" name id="internship" />
                      </div>
                      <label htmlFor="internship">Internship</label>
                    </div>
                    <div className="lblBtn">
                      <div className="switchBtn">
                        <input type="checkbox" name id="temporary" />
                      </div>
                      <label htmlFor="temporary">Temporary</label>
                    </div>
                  </div>
                  <hr />
                  <h4>Experience Level</h4>
                  <div className="type_list">
                    <div className="lblBtn">
                      <input type="checkbox" name id="all" />
                      <label htmlFor="all">All</label>
                    </div>
                    <div className="lblBtn">
                      <input type="checkbox" name id="_internship" />
                      <label htmlFor="_internship">Internship</label>
                    </div>
                    <div className="lblBtn">
                      <input type="checkbox" name id="entry-level" />
                      <label htmlFor="entry-level">Entry level</label>
                    </div>
                    <div className="lblBtn">
                      <input type="checkbox" name id="associate" />
                      <label htmlFor="associate">Associate</label>
                    </div>
                    <div className="lblBtn">
                      <input type="checkbox" name id="Mid-Senior" />
                      <label htmlFor="Mid-Senior">Mid-Senior level4</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="popup pricing_popup" data-popup="pricing_support">
        <div className="tableDv">
          <div className="tableCell">
            <div className="_inner">
              <div className="crosBtn" />
              <h3>FLEX PACKAGES</h3>
              <p>Fill up to hundreds of positions per year!</p>
              <form action>
                <div className="row formRow">
                  <div className="col-md-6">
                    <h6>Company</h6>
                    <input type="text" className="txtBox" name />
                  </div>
                  <div className="col-md-6">
                    <h6>Full Name</h6>
                    <input type="text" className="txtBox" name />
                  </div>
                  <div className="col-md-6">
                    <h6>Email</h6>
                    <input type="text" className="txtBox" name />
                  </div>
                  <div className="col-md-6">
                    <h6>Phone</h6>
                    <input type="text" className="txtBox" name />
                  </div>
                  <div className="col-md-12">
                    <h6>What are your estimated monthly or yearly needs?</h6>
                    <textarea name id className="txtBox" defaultValue={""} />
                  </div>
                  <div className="col-md-12">
                    <div className="text-center">
                      <button className="webBtn">Send Request</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="contain">
          <div className="flexRow flex">
            <div className="col">
              <h5>
                <Text string={site_settings.site_first_section_heading} />
              </h5>
              <ul className="lst">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/how-it-works">How It Works</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/training-programs">Training Programs</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>
                <Text string={site_settings.site_second_section_heading} />
              </h5>
              <ul className="lst">
                <li>
                  <Link to="/faqs">FAQ’s</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms and conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>
                <Text string={site_settings.site_third_section_heading} />
              </h5>
              <ul className="lst">
                <li>
                  <a href={`tel:${site_settings.site_phone}`}>
                    Call: {site_settings.site_phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site_settings.site_email}`}>
                    Mail: {site_settings.site_email}
                  </a>
                </li>
                <li>Address : {site_settings.site_address}</li>
              </ul>
            </div>
            <div className="col">
              <h5>
                <Text string={site_settings.site_fourth_section_heading} />
              </h5>
              <form
                action="newsletter"
                method="post"
                autoComplete="off"
                className
              >
                <label htmlFor="email">
                  <Text string={site_settings.site_fourth_section_sub_1} />
                </label>
                <div className="txtGrp relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="txtBox"
                    placeholder={site_settings.site_fourth_section_sub_2}
                  />
                  <button type="submit">
                    <i className="fi-arrow-right fi-2x" />
                  </button>
                </div>
              </form>
              <h5>
                <Text string={site_settings.site_fourth_section_sub_3} />
              </h5>
              <ul className="social flex">
                <li>
                  <a
                    href={site_settings.site_instagram}
                    target="_blank"
                    style={{ display: "block" }}
                  >
                    <img src="images/social-instagram.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href={site_settings.site_facebook}
                    target="_blank"
                    style={{ display: "block" }}
                  >
                    <img src="images/social-facebook.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href={site_settings.site_youtube}
                    target="_blank"
                    style={{ display: "block" }}
                  >
                    <img src="images/social-youtube.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href={site_settings.site_twitter}
                    target="_blank"
                    style={{ display: "block" }}
                  >
                    <img src="images/social-twitter.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright relative">
          <div className="contain">
            <div className="inner">
              <p>
                <Text string={site_settings.site_copyright} />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
