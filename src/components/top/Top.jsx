import React from "react";
import "./top.css";
import topimg from "../../images/pf1-min.jpg"

export default function Top() {
  return (
    <div>
      <div className= "top-img-container">
        <img alt="picture" src={topimg} className='top-img'/>
      </div>
    </div>
  );
}