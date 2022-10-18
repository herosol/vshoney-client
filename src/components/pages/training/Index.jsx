import React, { useEffect } from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

import { fetchTraining } from "../../../states/actions/fetchTraining";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

import Text from "../../common/Text";
import { getBackgroundImageUrlThumb } from "../../../helpers/helpers";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const TrainingPrograms = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchTraining.content);
  const isLoading = useSelector((state) => state.fetchTraining.isLoading);
  const { content, site_settings, partners } = data;

  useEffect(() => {
    dispatch(fetchTraining());
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
              className="outer_banner"
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
                  <Text string={content.banner_detail} />
                </div>
              </div>
            </section>
            <section className="training_blk">
              <div className="contain">
                <div className="sec_heading">
                  <h2>
                    <Text string={content.sec2_HEADING} />
                  </h2>
                </div>
                <div className="flex">
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/new3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/new1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/new2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/banner-img.png" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/banner-img-4.png" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/image-5.png" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/new3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/new1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/new2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/banner-img.png" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/banner-img-4.png" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <a href="?" />
                      <div className="panel_body">
                        <div className="badge_training">
                          <span>webinaire</span>
                        </div>
                        <div className="image">
                          <img src="images/image-5.png" alt="" />
                        </div>
                      </div>
                      <div className="penal_heading">
                        <h4>CRÉATION DE CONTENUS AVEC CANVA</h4>
                        <p>par Anissa Kadi</p>
                      </div>
                      <div className="panel_footer">
                        <div className="summery">
                          <p>
                            Découvrez et maitrisez Canva en appliquant votre
                            identité de marque, d'image de marque et de charte
                            graphique
                          </p>
                        </div>
                        <div className="flex">
                          <div className="listing_public">
                            <div className="_innerlst">
                              <div className="panel-heading">PUBLIC</div>
                              <div className="flex">
                                <div className="date">
                                  <div className="rolodex-widget">
                                    <div className="rings">
                                      <span className="left-ring" />
                                      <span className="right-ring" />
                                    </div>
                                    <div className="sheet">
                                      <span>27 + 29</span>
                                      <em>SEPT</em>
                                    </div>
                                  </div>
                                </div>
                                <div className="duration">
                                  <ul>
                                    <li>
                                      <strong>Durée :</strong>
                                      <span>7h00</span>
                                    </li>
                                    <li>
                                      <strong>Niveau :</strong>
                                      <span>Débutant-Intermédiaire</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_price">489 $</div>
                              </div>
                            </div>
                          </div>
                          <div className="listing_private">
                            <div className="_innerlst">
                              <div className="panel-heading">Private</div>
                              <p>
                                100% personnalisé selon vos besoins d'entreprise
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="highlight_blk_gray">
                  <Text string={content.last_para} />
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
