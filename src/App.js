import logo from "./logo.svg";
import "./App.css";
import Login from "./ui/login";
import ResponsiveAppBar from "./ui/header/header";
import { createContext } from "react";
import Myhomeprofile from "../src/ui/profile/Myhomeprofile";
import { BrowserRouter } from "react-router-dom";
import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import Career from "../src/ui/career/career";
import MyProject from "./ui/myproject/myproject";
import Hobbies from "./ui/Hobbies/hobbies";
import { useState } from "react";
import Detail from "./ui/Hobbies/details";
import { DataProvider } from "./data/DataContext";
import Portfolio from "./ui/portfolio/portfolio";
import PortfolioDetails from "./ui/portfolio/portfoliodetails";
import Achivements from "./ui/achievements/achivements";
import Technichalblog from "./ui/technichalblog/technichalblog";

function App() {
  let globalDataInfo = createContext();
  return (
    <>
      <ResponsiveAppBar />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Myhomeprofile />} />
          <Route path="/career" element={<Career />} />
          <Route path="/myproject" element={<MyProject />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/hobbyDetails" element={<Detail />} />
          <Route path="/achivements" element={<Achivements />} />
          <Route path="/technichalblog" element={<Technichalblog />} />
          <Route path="/portfolioDetail" element={<PortfolioDetails />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
