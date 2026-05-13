import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Gamedetails from "./Pages/Gamedetails";
import ShortGames from "./Pages/ShortGames";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Games" element={<Shop/>}/>
      <Route path="/Gamedetails/:id" element={<Gamedetails/>}/>
      <Route path="/ShortGames" element={<ShortGames/>}/>
      </Routes> 
    
    </BrowserRouter>
    
    </>
  )
}

export default App;
  