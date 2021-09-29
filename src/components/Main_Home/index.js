import React from "react";
import MainHeader from "../Main_Header";
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function MainHome() {
  return (
    <div className="home">
      <MainHeader />
      <div className="home-container">
        <Link to="/home/github" style={{ textDecoration: "none" }}>
          <div className="home-main">
            <SearchIcon className="home-searchIcon" />{" "}
            <h1 className="home-title">
              Click on me to look for your repositories!
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainHome;
