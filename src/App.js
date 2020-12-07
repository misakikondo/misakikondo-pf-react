import './App.css';
import Menu from "./components/menu/Menu.jsx";
// import Works from "./components/works/Works.jsx";
// import About from "./components/about/About.jsx";
// import Skills from "./components/skills/Skills.jsx";
// import Contacts from "./components/contacts/Contacts.jsx";
// import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-left'>
          <h1 className='title-font'>Misaki Kondo</h1> 
        </div>
        <div className='header-right'>
          <Menu/>
        </div>
      </header>
{/* 
      <main>
        
      </main>

      <Footer/> */}
    </div>
  );
}

export default App;