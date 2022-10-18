import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul>
        <li className="active">
          <Link to="/dashboard">
            <div className="small_icon">
              <img src="images/dashboard/dashboard.svg" alt="" />
            </div>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="">
          <Link to="/dashboard">
            <div className="small_icon">
              <img src="images/dashboard/file.svg" alt="" />
            </div>
            <span>My CV</span>
          </Link>
        </li>
        <li className="">
          <Link to="/dashboard">
            <div className="small_icon">
              <img src="images/dashboard/briefcase.svg" alt="" />
            </div>
            <span>Applied Jobs</span>
          </Link>
        </li>
        <li className="">
          <a href>
            <div className="small_icon">
              <img src="images/dashboard/document.svg" alt="" />
            </div>
            <span>Offers</span>
          </a>
        </li>
        <li className="">
          <Link to="/dashboard">
            <div className="small_icon">
              <img src="images/dashboard/wallet.svg" alt="" />
            </div>
            <span>Payment Method</span>
          </Link>
        </li>
        <li className="">
          <Link to="/dashboard">
            <div className="small_icon">
              <img src="images/dashboard/tags.svg" alt="" />
            </div>
            <span>Pricing Plans</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
