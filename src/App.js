import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Piercing from "./routes/Piercing";
import Shop from "./routes/Shop";
import Achievements from "./routes/Achievements";
import Faq from "./routes/Faq";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/piercing" element={<Piercing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
