import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageControl from "../common/ImageControl";
import { useSelector } from "react-redux";

const Header = ({ site_settings }) => {
  const authToken = useSelector((state) => state.fetchSignin.authToken);

  const [dropDownOne, setDropdownOne] = useState(false);
  const [dropDownTwo, setDropdownTwo] = useState(false);
  const [dropDownThree, setDropdownThree] = useState(false);

  const firstDropdown = () => {
    setDropdownOne(!dropDownOne);
    setDropdownTwo(false);
    setDropdownThree(false);
  };

  const secondDropdown = () => {
    setDropdownOne(false);
    setDropdownTwo(!dropDownTwo);
    setDropdownThree(false);
  };

  const thirdDropdown = () => {
    setDropdownOne(false);
    setDropdownTwo(false);
    setDropdownThree(!dropDownThree);
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    window.location.replace("/signin");
  };

  return (
    <>
      <header className="ease">
        <div className="contain">
          <div className="logo">
            <Link to="/">
              <ImageControl folder="images" src={site_settings.site_logo} />
            </Link>
          </div>
          <div className="toggle">
            <span />
          </div>
          <nav className="ease">
            <ul id="nav" nav>
              <li className="">
                <Link to="/jobs">Find Job</Link>
              </li>
              <li className="dropDown">
                <a
                  href="javascript:void(0)"
                  className="dropBtn"
                  onClick={firstDropdown}
                >
                  Candidates <i className="chevron" />
                </a>
                <div className={dropDownOne ? "dropCnt active" : "dropCnt"}>
                  <ul className="dropLst">
                    {!authToken && (
                      <li>
                        <Link to="/signup">Sign up</Link>
                      </li>
                    )}
                    <li>
                      <Link to="/contact-us">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropDown">
                <a
                  href="javascript:void(0)"
                  className="dropBtn"
                  onClick={secondDropdown}
                >
                  Employers <i className="chevron" />
                </a>
                <div className={dropDownTwo ? "dropCnt active" : "dropCnt"}>
                  <ul className="dropLst">
                    <li>
                      <Link to="/employer-home">Employers Home</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign up</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Job posting &amp; pricing</Link>
                    </li>
                    <li>
                      <Link to="/candidates">Find candidates</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="">
                <Link to="/training-programs">Trainings</Link>
              </li>
            </ul>
            {!authToken ? (
              <ul id="cta">
                <li className>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li className>
                  <Link to="/signin" className="webBtn mdBtn">
                    Sign in
                  </Link>
                </li>
              </ul>
            ) : (
              <div className="proIco dropDown" onClick={thirdDropdown}>
                <div className="inside dropBtn">
                  <div className="ico">
                    <img src="images/user.png" alt="" />
                  </div>
                </div>
                <ul
                  className={
                    dropDownThree ? "proDrop dropCnt active" : "proDrop dropCnt"
                  }
                >
                  <li>
                    <div className="user_header">
                      <h5>Aleena Gilbert</h5>
                      <p>Software Engineer</p>
                    </div>
                  </li>
                  <li>
                    <Link to="/dashboard">
                      <div className="small_icon">
                        <img src="images/dashboard/dashboard.svg" alt="" />
                      </div>
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <a href="javascript:void(0)" onClick={logout}>
                      <div className="small_icon">
                        <img src="images/dashboard/sign-out-alt.svg" alt="" />
                      </div>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
          <div className="clearfix" />
        </div>
      </header>
      <div className="pBar hidden">
        <span id="myBar" style={{ width: "0%" }} />
      </div>
    </>
  );
};

export default Header;
