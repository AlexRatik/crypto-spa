import React from "react";
import { Routes, Route } from "react-router-dom";
import CoinPage from "../pages/coinPage/coinPage";
import MainPage from "../pages/mainPage/mainPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<CoinPage />} />
    </Routes>
  );
};

export default Router;
