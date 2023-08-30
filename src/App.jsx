import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import Pricing from "./pages/Pricing";
import Background from "./layout/Background";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Background />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
