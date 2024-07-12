import React from "react";
import AboutBackground from "../Assets/about-banner-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";
import aboutimage from "../Assets/about-image.png"




const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">
          The Sweet Delights Bakery!
        </h1>
        <p className="primary-text">
        Indulge in the sweet life with us! Sweet Delights Bakery is a family-owned bakery dedicated to crafting mouthwatering treats that bring joy to our community.
        </p>
        <p className="primary-text">
        Our story began with a passion for baking and a dream to share love and happiness through every bite. Our talented team of bakers and decorators use only the finest ingredients to create a wide variety of sweet treats, from classic favourites to custom masterpieces. Come visit us and taste the love in every delicious detail!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;