import React from "react";
import "./contacts.css";

export default function Contacts() {
  return (
    <div>
      <h1 className="sub-title">contacts</h1>
      <h2 className="contacts-explain">お問い合わせフォーム</h2>
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
        <h2 id="back-top-btn">上部に戻る</h2>
      </div>
    </div>
  );
}