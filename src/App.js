import logo from "./logo.svg";
import "./App.css";
import Login from "./ui/login";
import ResponsiveAppBar from "./ui/header/header";
import { createContext } from "react";
import Myhomeprofile from "../src/ui/profile/Myhomeprofile";
import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import Career from "../src/ui/career/career";
import MyProject from "./ui/myproject/myproject";
import Hobbies from "./ui/Hobbies/hobbies";
import Detail from "./ui/Hobbies/details";
import { DataProvider } from "./data/DataContext";
import Portfolio from "./ui/portfolio/portfolio";
import PortfolioDetails from "./ui/portfolio/portfoliodetails";
import Achivements from "./ui/achievements/achivements";
import Technichalblog from "./ui/technichalblog/technichalblog";
import About from "../src/ui/about/about";

function App() {
  let globalDataInfo = createContext();
  return (
    <>
      <script
        type="text/javascript"
        src="https://www.freevisitorcounters.com/auth.php?id=1604769fd8afebac3335a943acc0c15816a6123d"
      ></script>
      <script
        type="text/javascript"
        src="https://www.freevisitorcounters.com/en/home/counter/1052093/t/3"
      ></script>
      <ResponsiveAppBar />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Myhomeprofile />} />
          <Route path="/career" element={<Career />} />
          <Route path="/aboutpage" element={<About />} />
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
