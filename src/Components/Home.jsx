import React from "react";
import BannerBackground from "../Assets/Home-Background-PNG.png";
import Cake from  "../Assets/homepage.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to Sweet Delights Bakery!
          </h1>
          <p className="primary-text">
          Indulge in the sweet life! Explore our mouthwatering treats, from classic favourites to custom creations. Freshly baked daily, our passion is to make every bite a delight.
          </p>
          <button className="secondary-button">
            <Link to="/About">More info <FiArrowRight /></Link>
          </button>
        </div>
        <div className="home-image-section">
        <img src={Cake} alt="" />
        </div>
      </div>
      </header>
      <Footer/>
    </div>
  );
};

export default Home;