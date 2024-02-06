// adding LINKs to react components(Single Page Application) 

/*
// import "./App.css";
// import Homepage from "./Homepage";
// import AboutLittleLemon from "./AboutLittleLemon";
 import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact.js";
function App() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
*/


        // ADDING Image 

/*
 import logo from "./assets/logo.png";

function App() {
  const randomImg = "https://wallpapers.com/images/hd/sung-jin-woo-and-shadow-army-art-0qmopltoprk8nrm4.jpg";
  return (
    <>
      <h1>Task: Add an Image below...</h1>
      <img src={logo} height={40} alt="An image logo was here!" /> 
      <img src={require("./assets/logo.png")} height={40} />
      <img src={randomImg} height={500} alt="Shadow Army was HERE!!!"/>
    </>
  );
}

export default App;
*/


// Adding Audio/Video in React 

/*
import React from "react";

function App() {

  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  };

  function toggle2(){
    if(bird2.paused){
      bird2.play();
    }else{
      bird2.paused();
    }
  }

  return (
    <div>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  );
}

export default App;
*/