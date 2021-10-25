import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Footer/>
    </div>
  );
}

export default App;
