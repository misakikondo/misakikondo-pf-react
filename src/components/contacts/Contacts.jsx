import React from "react";
import { animateScroll as scroll } from 'react-scroll';
import "./contacts.css";

export default function Contacts() {


function scrollToTop(){
  scroll.scrollToTop(); 
};

  return (
    <div className='contacts'>
      <h1 className="sub-title">contacts</h1>
      <div className="form-container">
        <div className="google">
          <h3>Google Form</h3>
          <a href= "https://docs.google.com/forms/d/e/1FAIpQLSfwWQz2CCjKkOofmWboXrb9UXoO7SKpC35jAH9X4MFNOrsNTg/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noopener noreferrer"> 
          <i className="fas fa-paper-plane fa-4x"></i></a>
        </div>

        <div className="mail">
          <h3>E-mail</h3>
          <a href= "mailto:misakikondo@gmail.com" target="_blank" rel="noopener noreferrer"> 
          <i className="fas fa-envelope fa-4x"></i></a>
        </div>
      </div>
      
      <div className="back-container">
        <h2 onClick={scrollToTop} id="back-top-btn">Back to Top</h2>
      </div>
    </div>
  );

}
