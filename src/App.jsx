import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./page/Home";
import Cars from "./page/Cars";
import Offers from "./page/Offers";
import Reservations from "./page/Reservations";
import Contact from "./page/Contact";
import Footer from "./Component/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Cars" element={<Cars />} />
          <Route path="Offers" element={<Offers />} />
          <Route path="Reservations" element={<Reservations />} />
          <Route path="Contact" element={<Contact />} />
           
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
