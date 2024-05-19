import Footer from './Components/Footer';
import Body from './Body';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {

  return (  
    <div className="App">
      
      <Header></Header>
      <Body></Body>
      
      <Footer></Footer>   
    </div>
    
  );
}
export default App;