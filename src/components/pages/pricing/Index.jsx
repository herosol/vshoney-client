import React, { useEffect } from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

import { fetchPricing } from "../../../states/actions/fetchPricing";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

import Text from "../../common/Text";
import { getBackgroundImageUrlThumb } from "../../../helpers/helpers";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const TrainingPrograms = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchPricing.content);
  const isLoading = useSelector((state) => state.fetchPricing.isLoading);
  const { content, site_settings, sec3s, plans } = data;

  useEffect(() => {
    dispatch(fetchPricing());
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
            <section className="packages">
              <div className="contain">
                <div className="sec_heading">
                  <h2>
                    <Text string={content.banner_heading} />
                  </h2>
                  <Text string={content.banner_detail} />
                </div>
                <div className="flex">
                  {plans &&
                    plans.map((row) => (
                      <div className="col">
                        <div className="inner">
                          <div className="topBtn">
                            <Link to="/pricing" className="webBtn">
                              {row.plan_name}
                            </Link>
                          </div>
                          <div className="top-package">
                            <h4>From</h4>
                            <h3>${row.price}</h3>
                          </div>
                          <div className="inner-package">
                            <Text string={row.detail} />
                          </div>
                          <div className="bTn">
                            <a to="/pricing" className="webBtn">
                              Choose Plan
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div
                  className="pricing_suport_blk popBtn"
                  data-popup="pricing_support"
                >
                  <div className="new_lbl">
                    <Text string={content.sec2_right_tag} />
                  </div>
                  <div className="inner_pricing_blk">
                    <h3>
                      <Text string={content.sec_heading_1} />
                    </h3>
                    <p>
                      <Text string={content.sec2_heading_2} />
                    </p>
                    <div className="bTn">
                      <a href="javascript:void(0)" className="webBtn">
                        <Text string={content.sec2_button_text} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex m_th">
                  {sec3s &&
                    sec3s.map((row) => (
                      <div className="_col">
                        <div className="_inner">
                          <h4>{row.title}</h4>
                          <p>{row.detail}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
            <section className="testimonial_sec pricing_testi">
              <div className="contain">
                <div className="flex">
                  <div className="colL">
                    <div className="sec_heading">
                      <h3>
                        <Text string={content.testi_tag} />
                      </h3>
                      <h2>
                        <Text string={content.testi_heading} />
                      </h2>
                      <p>
                        <Text string={content.testi_tagline} />
                      </p>
                    </div>
                  </div>
                  <div className="colR">
                    <div id="owl-testi" className="owl-carousel owl-theme">
                      <div className="item">
                        <div className="inner">
                          <div className="comnt_testi">
                            <div className="stars_revie">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p>
                              If you are looking for a reliable printing house
                              that will get back to you right away then
                              Printshop is the way to go. Whether it is a rush
                              delivery, quick.
                            </p>
                          </div>
                          <div className="flex">
                            <div className="testi_icon">
                              <img src="images/new1.jpg" alt="" />
                            </div>
                            <h5>John Doe</h5>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="inner">
                          <div className="comnt_testi">
                            <div className="stars_revie">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p>
                              If you are looking for a reliable printing house
                              that will get back to you right away then
                              Printshop is the way to go. We love hearing from
                              our valued customers. If you have any questions or
                              concerns, please don’t hesitate to let us know!
                              Send us a message, or give us a call, and one of
                              our bright, knowledgeable, and friendly staff will
                              get back to you ASAP.
                            </p>
                          </div>
                          <div className="flex">
                            <div className="testi_icon">
                              <img src="images/2.png" alt="" />
                            </div>
                            <h5>Aleena Gilbert</h5>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="inner">
                          <div className="comnt_testi">
                            <div className="stars_revie">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p>
                              If you are looking for a reliable printing house
                              that will get back to you right away then
                              Printshop is the way to go. Whether it is a rush
                              delivery, quick If you have any questions or
                              concerns If you have any questions or concerns.
                            </p>
                          </div>
                          <div className="flex">
                            <div className="testi_icon">
                              <img src="images/1.png" alt="" />
                            </div>
                            <h5>John Doe</h5>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="inner">
                          <div className="comnt_testi">
                            <div className="stars_revie">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p>
                              If you are looking for a reliable printing house
                              that will get back to you right away then
                              Printshop is the way to go. Whether it is a rush
                              delivery, quick.
                            </p>
                          </div>
                          <div className="flex">
                            <div className="testi_icon">
                              <img src="images/new3.jpg" alt="" />
                            </div>
                            <h5>John Doe</h5>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="inner">
                          <div className="comnt_testi">
                            <div className="stars_revie">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p>
                              If you are looking for a reliable printing house
                              that will get back to you right away then
                              Printshop is the way to go. We love hearing from
                              our valued customers. If you have any questions or
                              concerns, please don’t hesitate to let us know!
                              Send us a message, or give us a call, and one of
                              our bright, knowledgeable, and friendly staff will
                              get back to you ASAP.
                            </p>
                          </div>
                          <div className="flex">
                            <div className="testi_icon">
                              <img src="images/new2.jpg" alt="" />
                            </div>
                            <h5>Aleena Gilbert</h5>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="inner">
                          <div className="comnt_testi">
                            <div className="stars_revie">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <p>
                              If you are looking for a reliable printing house
                              that will get back to you right away then
                              Printshop is the way to go. Whether it is a rush
                              delivery, quick If you have any questions or
                              concerns If you have any questions or concerns.
                            </p>
                          </div>
                          <div className="flex">
                            <div className="testi_icon">
                              <img src="images/new1.jpg" alt="" />
                            </div>
                            <h5>John Doe</h5>
                          </div>
                        </div>
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
