import React from "react";
import "./menu.css";
import { Link } from 'react-scroll';

export default function Header() {

  return (
    <div className='menu-container'>
      <menu>
          <Link
          className='lists'
          activeClass='active'
          to='private-works-id'
          spy={true}
          smooth={true}
          offset={-10}
          duration= {800}
          >Works</Link> 

          <Link
          className='lists'
          activeClass='active'
          to='private-about-id'
          spy={true}
          smooth={true}
          offset={-10}
          duration= {800}
          >About</Link> 

          <Link
          className='lists'
          activeClass='active'
          to='private-skills-id'
          spy={true}
          smooth={true}
          offset={-10}
          duration= {800}
          >Skills</Link> 
          
          <Link
          className='lists'
          activeClass='active'
          to='private-contacts-id'
          spy={true}
          smooth={true}
          offset={-10}
          duration= {800}
          >Contacts</Link> 
      </menu>
    </div>
  );
}
