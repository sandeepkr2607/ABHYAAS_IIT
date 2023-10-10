import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import BrainGym from "./pages/brainGym/BrainGym";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Others/Form";
import Otp from "./components/Others/Otp";
import Personal from "./components/Others/Personal";
import Application from "./components/Others/Application";
import Success from "./components/Others/Success";
import Pdfgenerator from "./components/Others/Pdfgenerator";
import Admin from "./components/Others/Admin";
import StudentDetails from "./components/Others/StudentDetails";
import Data from "./components/Others/Data";
import Maths from "./pages/maths/Maths";
import IitJee from "./pages/iitjee/IitJee";
import Foundation from "./pages/foundation/Foundation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/brain-gym" element={<BrainGym />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/iitjee" element={<IitJee />} />
        <Route path="/foundation" element={<Foundation />} />

        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="/otp" element={<Otp></Otp>}></Route>
        <Route path="/errorregabhyaasIIT2023" element={<Data></Data>}></Route>
        <Route path="/personal" element={<Personal></Personal>}></Route>
        <Route
          path="/application"
          element={<Application></Application>}></Route>
        <Route path="/login" element={<Admin></Admin>}></Route>
        <Route path="/success" element={<Success></Success>}></Route>
        <Route path="/pdf" element={<Pdfgenerator></Pdfgenerator>}></Route>
        <Route
          path="/studentdetails"
          element={<StudentDetails></StudentDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
