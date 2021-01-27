import './App.css';
import Menu from "./components/menu/Menu.jsx";
import Top from "./components/top/Top.jsx";
import Works from "./components/works/Works.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Footer from "./components/footer/Footer.jsx";
import Photo from "./components/photo/Photo.jsx";
import { animateScroll as scroll } from 'react-scroll';

function App() {

  function scrollToTop(){
    scroll.scrollToTop(); 
  };

  return (
    <div className="App">
      <header className='App-header'>
        <div className='header-left'>
          <h1 onClick={scrollToTop} className='title-font'>Misaki Kondo</h1> 
        </div>
        <div className='header-right'>
          <Menu/></div>
      </header>

      <main>
        <div className='top-container' id='private-top-id'><Top/></div>
        <div className='common-container' id='private-works-id'><Works/></div>
        {/* <div className='common-container' id='photo-id'><Photo/></div> */}
        <div className='common-container' id='private-about-id'><About/></div>
        <div className='common-container' id='private-skills-id'><Skills/></div>
        <div className='common-container' id='private-contacts-id'><Contacts/></div>
      </main>

      <footer className='footer-container'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;