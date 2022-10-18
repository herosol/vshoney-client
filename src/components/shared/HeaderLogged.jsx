import React from "react";
import { Link } from "react-router-dom";

const HeaderLogged = () => {
  return (
    <>
      <header class="ease logged_header">
        <div class="contain-custom">
          <div class="logo">
            <Link to="/">
              <img src="images/logo.png" alt="" />
            </Link>
          </div>
          <div class="toggle">
            <span></span>
          </div>
          <nav class="ease">
            <ul id="nav" class="loged-nav">
              <li>
                <a href="notification.php">
                  <span class="active"></span>
                  <img
                    src="images/dashboard/bell.svg"
                    alt=""
                    class="ring_bell"
                  />
                </a>
              </li>
              <li>
                <a href="chat.php">
                  <span class="active chat_box"></span>
                  <img src="images/dashboard/chat.svg" alt="" />
                </a>
              </li>
            </ul>

            <ul id="nav" nav class="hide_ds">
              <li class="">
                <a href="my-jobs.php">My Jobs</a>
              </li>
              <li class="">
                <a href="?">View Offers</a>
              </li>
              <li class="">
                <a href="payment-method.php">Payment Method</a>
              </li>
              <li class="">
                <a href="pricing-plan.php">Pricing Plans</a>
              </li>
            </ul>

            <div class="proIco dropDown">
              <div class="inside dropBtn">
                <div class="ico">
                  <img src="images/1.png" alt="" />
                </div>
              </div>
              <ul class="proDrop dropCnt">
                <li>
                  <div class="user_header">
                    <h5>Aleena Gilbert</h5>
                    <p>Software Engineer</p>
                  </div>
                </li>
                <li>
                  <a href="index.php">
                    <div class="small_icon">
                      <img src="images/dashboard/dashboard.svg" alt="" />
                    </div>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="notification.php">
                    <div class="small_icon">
                      <img src="images/dashboard/bell.svg" alt="" />
                    </div>
                    <span>Notifications</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div class="small_icon">
                      <img src="images/dashboard/chat.svg" alt="" />
                    </div>
                    <span>Chat</span>
                  </a>
                </li>

                <li>
                  <a href="account-settings.php">
                    <div class="small_icon">
                      <img src="images/dashboard/settings.svg" alt="" />
                    </div>
                    <span>Profile Settings</span>
                  </a>
                </li>

                <li>
                  <a href="login.php">
                    <div class="small_icon">
                      <img src="images/dashboard/sign-out-alt.svg" alt="" />
                    </div>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="clearfix"></div>
        </div>
      </header>
      <div class="pBar hidden">
        <span id="myBar" style={{ width: "0%" }}></span>
      </div>
    </>
  );
};

export default HeaderLogged;
