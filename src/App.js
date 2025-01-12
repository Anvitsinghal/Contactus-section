import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import Contactform from './components/contact-form/Contactform';



function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Hero/>
      <Contactform/>
     
    </div>
  );
}

export default App;
