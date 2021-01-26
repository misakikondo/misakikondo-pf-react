import React from "react";
import "./top.css";
import topimg from "../../images/top.gif"

export default function Top() {
  return (
    <div>
      <div className= "top-img-container">
        <img alt="" src={topimg} className='top-img'/>
      </div>
    </div>
  );
}