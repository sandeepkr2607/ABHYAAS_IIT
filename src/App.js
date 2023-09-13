import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Others/Form";
import Otp from "./components/Others/Otp";
import Personal from "./components/Others/Personal";
import Application from "./components/Others/Application";
import Success from "./components/Others/Success";

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="/otp" element={<Otp></Otp>}></Route>
        
        <Route path="/personal" element={<Personal></Personal>}></Route>
        <Route
          path="/application"
          element={<Application></Application>}></Route>
        <Route path="/success" element={<Success></Success>}></Route>
      </Routes>

    </div>
  );
}

export default App;
