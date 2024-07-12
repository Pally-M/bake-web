import React from "react";
import ProfilePic from "../Assets/profilepic.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What our customers say about us...</h1>
        <p className="primary-text">
          Join our happy customer family and indulge in the sweet life!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          "I'm obsessed with Sweet Delights Bakery! Their cakes are devine and the service is top-notch."
        </p>
        <h2>Rachel M</h2>
        <div className="testimonials-stars-container">
          <span aria-label="Star-rating-1"><AiFillStar /></span>
          <span aria-label="Star-rating-2"><AiFillStar /></span>
          <span aria-label="Star-rating-3"><AiFillStar /></span>
          <span aria-label="Star-rating-4"><AiFillStar /></span>
          <span aria-label="Star-rating-5"><AiFillStar /></span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;