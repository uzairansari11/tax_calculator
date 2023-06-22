import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import HousingRentAllowance from "../page/HousingRentAllowance";
import AdvanceTaxCalculator from "../page/AdvanceTaxCalculator";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housing" element={<HousingRentAllowance />} />
      <Route path="/advance" element={<AdvanceTaxCalculator />} />
    </Routes>
  );
};

export default Routing;
