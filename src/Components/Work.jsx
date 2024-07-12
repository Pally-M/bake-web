import React from "react";
import freshbread from "../Assets/freshbread.jpg";
import customcakes from "../Assets/customcakes.jpg";
import pastrydanish from "../Assets/pastrydanish.jpg";
import Contact from "./Contact";
import Footer from "./Footer";
import artisanal from "../Assets/artisanal pies.jpg";
import Gourmet from "../Assets/gourmetcookies.jpg";
import Navbar from "./Navbar";


const Work = () => {
  const workInfoData = [
    {
      image: freshbread,
      title: "Fresh Bread",
      text: "Crusty baguettes, soft ciabatta, or heartly whole-grain loaves - freshly baked daily!",
    },
    {
      image: customcakes,
      title: "Custom Cakes",
      text: "Beautiful birthday cakes, wedding cakes, or specialty cakes for any occassion - made to order!",
    },
    {
      image: pastrydanish,
      title: "Pastries & Danishes",
      text: "Flaky croissants, sweet muffins, or fruit-filled danishes - perfect for breakfast or snacks!",
    },

    
    {
      image: Gourmet,
      title: "Gourmet Cookies",
      text: "Chewy chocolate chip, crispy oatmeal raisen, or decadent peanut butter cookies - fresh from the oven!",
    },

    {
      image: artisanal,
      title: "Artisanal Pies",
      text: "Fruit pies (e.g., apple, cherry, or blueberry), cream pies (e.g., banana cream or coconut cream), or savory pies (e.g., chicken pot pie) - all made with love!",
    },

    
    
  ];
  return (
    <>
    <Navbar/>
    <Contact/>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Our Bakery Menu</p>
        <h1 className="primary-heading">Where Magic Happens</h1>
        <p className="primary-text">
          We mix, we measure, we bake, and we decorate - all with a dash of love and a pinch of passion. Our bakery is where creativity meets deliciousness, where every treat is handcrafted to bring joy to your special moments.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <div className="about-buttons-container">
          <button style={{backgroundcolor:'white',}} className="secondary-button">Order Now</button>
            </div>
          </div>
        ))}
       </div>
      <Footer/>
    </div>
    </>
  );
};

export default Work;