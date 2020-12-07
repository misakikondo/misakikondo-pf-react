import React from "react";
import "./menu.css";

export default function Header() {

  return (
    <div className='menu-container'>
      <ul>
        <li className='lists'>works</li>
        <li className='lists'>about</li>
        <li className='lists'>skills</li>
        <li className='lists'>contacts</li>
      </ul>
    </div>
  );
}
