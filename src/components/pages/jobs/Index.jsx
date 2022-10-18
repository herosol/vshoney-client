import React, { useEffect } from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

import { fetchJobs } from "../../../states/actions/fetchJobs";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

import Text from "../../common/Text";
import { getBackgroundImageUrlThumb } from "../../../helpers/helpers";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const TrainingPrograms = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchJobs.content);
  const isLoading = useSelector((state) => state.fetchJobs.isLoading);
  const { content, site_settings, partners } = data;

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  useDocumentTitle(data.page_title);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header site_settings={site_settings} />
          <main index>
            <section
              className="become_seller_banner support_banner"
              style={{
                backgroundImage: `url(${getBackgroundImageUrlThumb(
                  content.image1
                )})`
              }}
            >
              <div className="contain">
                <div className="cntnt">
                  <h1>
                    <Text string={content.banner_heading} />
                  </h1>
                  <p>
                    <Text string={content.banner_tagline} />
                  </p>
                  <div className="banner-form">
                    <form action method="post" autoComplete="off">
                      <div className="flex">
                        <div className="col">
                          <div className="_txtGrp">
                            <i className="fi fi-rr-search" />
                            <input
                              type="text"
                              className="txtBox"
                              placeholder={content.banner_field_heading}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="_txtGrp">
                            <i className="fi fi-rr-marker" />
                            <input
                              type="text"
                              className="txtBox"
                              placeholder={content.banner_field_heading_2}
                            />
                          </div>
                        </div>
                        <div className="col_last">
                          <button
                            type="submit"
                            name
                            className="webBtn colorBtn"
                          >
                            {content.banner_button_text}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <section className="job_results">
              <div className="contain">
                <div className="flex">
                  <div className="colL">
                    <div className="inner">
                      <h4>Category</h4>
                      <select className="txtBox selectpicker">
                        <option value>Choose a category</option>
                        <option value>Residential</option>
                        <option value>Commercial</option>
                        <option value>Industrial</option>
                        <option value>Apartments</option>
                      </select>
                      <hr />
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
                      <hr />
                      <h4>Salary Range</h4>
                      <input
                        type="text"
                        id="price"
                        name
                        defaultValue
                        className="_price"
                      />
                    </div>
                    <br />
                    <div className="inner">
                      <h4>Recruiting?</h4>
                      <p>
                        <small>
                          Advertise your jobs to millions of monthly users and
                          search 15.8 million CVs in our database.
                        </small>
                      </p>
                      <div className="bTn">
                        <a href="job-detail.php" className="webBtn">
                          Start Recruiting Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="colR">
                    <div className="filter_top">
                      <div className="text">
                        Showing <strong>41-60</strong> of <strong>944</strong>{" "}
                        jobs
                      </div>
                      <a
                        href="javascript:void(0)"
                        className="popBtn webBtn filter_show_cell"
                        data-popup="filter"
                      >
                        Filters
                      </a>
                      <div className="filter_drop">
                        <select name id className="selectpicker txtBox">
                          <option value>New Jobs</option>
                          <option value>Freelance</option>
                          <option value>Full Time</option>
                          <option value>Internship</option>
                          <option value>Part Time</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex job_flex">
                      <div className="col">
                        <div className="inner">
                          <div className="cta_act_btn">
                            <a href className="share_btn">
                              <i className="fi fi-share-alt" />
                            </a>
                            <a href className="save_btn">
                              <i className="fi fi-rr-bookmark" />
                            </a>
                            <a href className="like_btn">
                              <i className="fi fi-heart" />
                            </a>
                          </div>
                          <div className="head_job">
                            <div className="img_ico">
                              <img src="images/3-2.png" alt="" />
                            </div>
                            <div className="cntnt">
                              <h4>
                                <a href="job-detail.php">
                                  Software Engineer (Android)
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="fi fi-rr-marker" />{" "}
                                  <span>New York, NY</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-briefcase" />{" "}
                                  <span>Full time</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-clock-two" />{" "}
                                  <span>3 mins ago</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="job_bdy">
                            <p>
                              We want someone who has been doing this for a
                              solid 2-3 years. We want someone who can
                              demonstrate an extremely strong portfolio. Create
                              deliverables for your product area (for example
                              competitive analyses, user flows.
                            </p>
                            <div className="skils">
                              <span>Adobe XD</span>
                              <span>Figma</span>
                            </div>
                          </div>
                          <div className="job_footer">
                            <div className="job_price">
                              $500<span>/Hour</span>
                            </div>
                            <a href="job-detail.php" className="webBtn mdBtn">
                              Quick view
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="inner">
                          <div className="cta_act_btn">
                            <a href className="share_btn">
                              <i className="fi fi-share-alt" />
                            </a>
                            <a href className="save_btn">
                              <i className="fi fi-rr-bookmark" />
                            </a>
                            <a href className="like_btn">
                              <i className="fi fi-heart" />
                            </a>
                          </div>
                          <div className="head_job">
                            <div className="img_ico">
                              <img src="images/3-3.png" alt="" />
                            </div>
                            <div className="cntnt">
                              <h4>
                                <a href="job-detail.php">
                                  Software Engineer (Android)
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="fi fi-rr-marker" />{" "}
                                  <span>New York, NY</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-briefcase" />{" "}
                                  <span>Full time</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-clock-two" />{" "}
                                  <span>3 mins ago</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="job_bdy">
                            <p>
                              We want someone who has been doing this for a
                              solid 2-3 years. We want someone who can
                              demonstrate an extremely strong portfolio. Create
                              deliverables for your product area (for example
                              competitive analyses, user flows.
                            </p>
                            <div className="skils">
                              <span>Adobe XD</span>
                              <span>Figma</span>
                              <span>Photoshop</span>
                            </div>
                          </div>
                          <div className="job_footer">
                            <div className="job_price">
                              $500<span>/Hour</span>
                            </div>
                            <a href="job-detail.php" className="webBtn mdBtn">
                              Quick view
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="inner">
                          <div className="cta_act_btn">
                            <a href className="share_btn">
                              <i className="fi fi-share-alt" />
                            </a>
                            <a href className="save_btn">
                              <i className="fi fi-rr-bookmark" />
                            </a>
                            <a href className="like_btn">
                              <i className="fi fi-heart" />
                            </a>
                          </div>
                          <div className="head_job">
                            <div className="img_ico">
                              <img src="images/3-1.png" alt="" />
                            </div>
                            <div className="cntnt">
                              <h4>
                                <a href="job-detail.php">
                                  Software Engineer (Android)
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="fi fi-rr-marker" />{" "}
                                  <span>New York, NY</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-briefcase" />{" "}
                                  <span>Full time</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-clock-two" />{" "}
                                  <span>3 mins ago</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="job_bdy">
                            <p>
                              We want someone who has been doing this for a
                              solid 2-3 years. We want someone who can
                              demonstrate an extremely strong portfolio. Create
                              deliverables for your product area (for example
                              competitive analyses, user flows.
                            </p>
                            <div className="skils">
                              <span>Adobe Illusterator</span>
                              <span>Figma</span>
                              <span>Photoshop</span>
                            </div>
                          </div>
                          <div className="job_footer">
                            <div className="job_price">
                              $500<span>/Hour</span>
                            </div>
                            <a href="job-detail.php" className="webBtn mdBtn">
                              Quick view
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="inner">
                          <div className="cta_act_btn">
                            <a href className="share_btn">
                              <i className="fi fi-share-alt" />
                            </a>
                            <a href className="save_btn">
                              <i className="fi fi-rr-bookmark" />
                            </a>
                            <a href className="like_btn">
                              <i className="fi fi-heart" />
                            </a>
                          </div>
                          <div className="head_job">
                            <div className="img_ico">
                              <img src="images/3-4.png" alt="" />
                            </div>
                            <div className="cntnt">
                              <h4>
                                <a href="job-detail.php">
                                  Software Engineer (Android)
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="fi fi-rr-marker" />{" "}
                                  <span>New York, NY</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-briefcase" />{" "}
                                  <span>Full time</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-clock-two" />{" "}
                                  <span>3 mins ago</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="job_bdy">
                            <p>
                              We want someone who has been doing this for a
                              solid 2-3 years. We want someone who can
                              demonstrate an extremely strong portfolio. Create
                              deliverables for your product area (for example
                              competitive analyses, user flows.
                            </p>
                            <div className="skils">
                              <span>Adobe Illusterator</span>
                              <span>Figma</span>
                              <span>Photoshop</span>
                            </div>
                          </div>
                          <div className="job_footer">
                            <div className="job_price">
                              $500<span>/Hour</span>
                            </div>
                            <a href="job-detail.php" className="webBtn mdBtn">
                              Quick view
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="inner">
                          <div className="cta_act_btn">
                            <a href className="share_btn">
                              <i className="fi fi-share-alt" />
                            </a>
                            <a href className="save_btn">
                              <i className="fi fi-rr-bookmark" />
                            </a>
                            <a href className="like_btn">
                              <i className="fi fi-heart" />
                            </a>
                          </div>
                          <div className="head_job">
                            <div className="img_ico">
                              <img src="images/3-5.png" alt="" />
                            </div>
                            <div className="cntnt">
                              <h4>
                                <a href="job-detail.php">
                                  Software Engineer (Android)
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="fi fi-rr-marker" />{" "}
                                  <span>New York, NY</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-briefcase" />{" "}
                                  <span>Full time</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-clock-two" />{" "}
                                  <span>3 mins ago</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="job_bdy">
                            <p>
                              We want someone who has been doing this for a
                              solid 2-3 years. We want someone who can
                              demonstrate an extremely strong portfolio. Create
                              deliverables for your product area (for example
                              competitive analyses, user flows.
                            </p>
                            <div className="skils">
                              <span>Adobe XD</span>
                              <span>Figma</span>
                            </div>
                          </div>
                          <div className="job_footer">
                            <div className="job_price">
                              $500<span>/Hour</span>
                            </div>
                            <a href="job-detail.php" className="webBtn mdBtn">
                              Quick view
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="inner">
                          <div className="cta_act_btn">
                            <a href className="share_btn">
                              <i className="fi fi-share-alt" />
                            </a>
                            <a href className="save_btn">
                              <i className="fi fi-rr-bookmark" />
                            </a>
                            <a href className="like_btn">
                              <i className="fi fi-heart" />
                            </a>
                          </div>
                          <div className="head_job">
                            <div className="img_ico">
                              <img src="images/3-6.png" alt="" />
                            </div>
                            <div className="cntnt">
                              <h4>
                                <a href="job-detail.php">
                                  Software Engineer (Android)
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="fi fi-rr-marker" />{" "}
                                  <span>New York, NY</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-briefcase" />{" "}
                                  <span>Full time</span>
                                </li>
                                <li>
                                  <i className="fi fi-rr-clock-two" />{" "}
                                  <span>3 mins ago</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="job_bdy">
                            <p>
                              We want someone who has been doing this for a
                              solid 2-3 years. We want someone who can
                              demonstrate an extremely strong portfolio. Create
                              deliverables for your product area (for example
                              competitive analyses, user flows.
                            </p>
                            <div className="skils">
                              <span>Adobe XD</span>
                              <span>Figma</span>
                              <span>Photoshop</span>
                            </div>
                          </div>
                          <div className="job_footer">
                            <div className="job_price">
                              $500<span>/Hour</span>
                            </div>
                            <a href="job-detail.php" className="webBtn mdBtn">
                              Quick view
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <ul className="pagination">
                        <li>
                          <a href="?">«</a>
                        </li>
                        <li>
                          <a href="?">1</a>
                        </li>
                        <li>
                          <a href="?" className="active">
                            2
                          </a>
                        </li>
                        <li>
                          <a href="?">3</a>
                        </li>
                        <li>
                          <a href="?">4</a>
                        </li>
                        <li>
                          <a href="?">5</a>
                        </li>
                        <li>
                          <a href="?">»</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="job_listing_grid job_page_featured big_top_bot">
              <div className="contain">
                <div className="flex heading_flex_jobs">
                  <div className="sec_heading">
                    <h3>
                      <Text string={content.fea_heading} />
                    </h3>
                    <h2>
                      <Text string={content.fea_tagline} />
                    </h2>
                  </div>
                </div>
                <div className="flex job_flex">
                  <div className="col">
                    <div className="inner">
                      <div className="cta_act_btn column_dir">
                        <a href className="share_btn">
                          <i className="fi fi-share-alt" />
                        </a>
                        <a href className="save_btn">
                          <i className="fi fi-rr-bookmark" />
                        </a>
                        <a href className="like_btn">
                          <i className="fi fi-heart" />
                        </a>
                      </div>
                      <div className="head_job">
                        <div className="img_ico">
                          <img src="images/3-2.png" alt="" />
                        </div>
                        <div className="cntnt">
                          <h4>
                            <a href="?">Software Engineer (Android)</a>
                          </h4>
                          <ul>
                            <li>
                              <i className="fi fi-rr-marker" />{" "}
                              <span>New York, NY</span>
                            </li>
                            <li>
                              <i className="fi fi-rr-briefcase" />{" "}
                              <span>Full time</span>
                            </li>
                            <li>
                              <i className="fi fi-rr-clock-two" />{" "}
                              <span>3 mins ago</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="job_bdy">
                        <p>
                          We want someone who has been doing this for a solid
                          2-3 years. We want someone who can demonstrate an
                          extremely strong portfolio. Create deliverables for
                          your product area (for example competitive analyses,
                          user flows.
                        </p>
                        <div className="skils">
                          <span>Adobe XD</span>
                          <span>Figma</span>
                        </div>
                      </div>
                      <div className="job_footer">
                        <div className="job_price">
                          $500<span>/Hour</span>
                        </div>
                        <a href="job-detail.php" className="webBtn mdBtn">
                          Quick view
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <div className="cta_act_btn column_dir">
                        <a href className="share_btn">
                          <i className="fi fi-share-alt" />
                        </a>
                        <a href className="save_btn">
                          <i className="fi fi-rr-bookmark" />
                        </a>
                        <a href className="like_btn">
                          <i className="fi fi-heart" />
                        </a>
                      </div>
                      <div className="head_job">
                        <div className="img_ico">
                          <img src="images/3-3.png" alt="" />
                        </div>
                        <div className="cntnt">
                          <h4>
                            <a href="?">Software Engineer (Android)</a>
                          </h4>
                          <ul>
                            <li>
                              <i className="fi fi-rr-marker" />{" "}
                              <span>New York, NY</span>
                            </li>
                            <li>
                              <i className="fi fi-rr-briefcase" />{" "}
                              <span>Full time</span>
                            </li>
                            <li>
                              <i className="fi fi-rr-clock-two" />{" "}
                              <span>3 mins ago</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="job_bdy">
                        <p>
                          We want someone who has been doing this for a solid
                          2-3 years. We want someone who can demonstrate an
                          extremely strong portfolio. Create deliverables for
                          your product area (for example competitive analyses,
                          user flows.
                        </p>
                        <div className="skils">
                          <span>Adobe XD</span>
                          <span>Figma</span>
                          <span>Photoshop</span>
                        </div>
                      </div>
                      <div className="job_footer">
                        <div className="job_price">
                          $500<span>/Hour</span>
                        </div>
                        <a href="job-detail.php" className="webBtn mdBtn">
                          Quick view
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <div className="cta_act_btn column_dir">
                        <a href className="share_btn">
                          <i className="fi fi-share-alt" />
                        </a>
                        <a href className="save_btn">
                          <i className="fi fi-rr-bookmark" />
                        </a>
                        <a href className="like_btn">
                          <i className="fi fi-heart" />
                        </a>
                      </div>
                      <div className="head_job">
                        <div className="img_ico">
                          <img src="images/3-1.png" alt="" />
                        </div>
                        <div className="cntnt">
                          <h4>
                            <a href="?">Software Engineer (Android)</a>
                          </h4>
                          <ul>
                            <li>
                              <i className="fi fi-rr-marker" />{" "}
                              <span>New York, NY</span>
                            </li>
                            <li>
                              <i className="fi fi-rr-briefcase" />{" "}
                              <span>Full time</span>
                            </li>
                            <li>
                              <i className="fi fi-rr-clock-two" />{" "}
                              <span>3 mins ago</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="job_bdy">
                        <p>
                          We want someone who has been doing this for a solid
                          2-3 years. We want someone who can demonstrate an
                          extremely strong portfolio. Create deliverables for
                          your product area (for example competitive analyses,
                          user flows.
                        </p>
                        <div className="skils">
                          <span>Adobe Illusterator</span>
                          <span>Figma</span>
                          <span>Photoshop</span>
                        </div>
                      </div>
                      <div className="job_footer">
                        <div className="job_price">
                          $500<span>/Hour</span>
                        </div>
                        <a href="job-detail.php" className="webBtn mdBtn">
                          Quick view
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer site_settings={site_settings} />
        </>
      )}
    </>
  );
};

export default TrainingPrograms;
