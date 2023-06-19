import logo from './logo.svg';
import './App.css';
import Login from './ui/login';
import ResponsiveAppBar from './ui/header/header'
import {createContext} from 'react';
import Myhomeprofile from '../src/ui/profile/Myhomeprofile'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Career from '../src/ui/career/career';
import MyProject from './ui/myproject/myproject';
import Hobbies from './ui/Hobbies/hobbies';
import { useState } from 'react';


function App(){
let globalDataInfo = createContext()
  return(
    <> 
    <ResponsiveAppBar/> 
      <Routes>
          <Route path="/" element={<Myhomeprofile />} />
          <Route path="/career" element={<Career/>} />
          <Route path="/myproject" element={<MyProject />} />
          <Route path="/hobbies" element={<Hobbies />} />
       </Routes>
    </>
  )
}

export default App
