import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    //Form submition logic here
  };

  const handleChange = (event) => {
    //input field value handling logic
  };

  return (
    <div className="contact-page-wrapper">
      <header>
       <h1 className="primary-heading">Want to know more about us?</h1>
      <h1 className="primary-heading">Let Us know.</h1> 
      </header>
      <form onsubmit={handleSubmit}>
        <lable> 
          <input type="text" placeholder="Search" onChange={handleChange} aria-label="Search input"/>
          </lable>
          <button className="secondary-button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
