import logo from "./logo.svg";
import "./App.css";
import Login from "./ui/login";
import ResponsiveAppBar from "./ui/header/header";
import { createContext, useState } from "react";
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
import ChatGPT from "./ui/chatgpt/ChatGPT";
import chat from "../src/assets/chaticon.png";
import { Chat } from "@mui/icons-material";
import Chatwindow from "./ui/chat/chat";
import { createStore } from "redux";
import RootReducer from "./Services/Reducers/RootReducer";
import provider from "react-redux";
import Puzzle from "./ui/game/game-Puzzle/puzzle";
import GameZone from "./ui/game";

function App() {
  let globalDataInfo = createContext();
  const [chatClick, setChatClick] = useState(false);
  function getchat() {
    setChatClick((prev) => !prev);
  }

  function handelSubmit(username, password) {
    console.log("...>", username, password);
  }

  return (
    <>
      <img className="chat-icon" src={chat} onClick={() => getchat()} />
      {chatClick && <Chatwindow />}
      <DataProvider>
        <ResponsiveAppBar />
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
          <Route path="/askme" element={<ChatGPT />} />
          <Route path="/game" element={<GameZone />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/portfolioDetail" element={<PortfolioDetails />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
