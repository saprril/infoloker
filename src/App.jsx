import React, {useState} from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { NavbarDefault } from "./components/NavbarDefault";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { Detail } from "./pages/Detail";
import { RegisterSuccess } from "./pages/RegisterSuccess";
import Cookies from "universal-cookie";
const cookies = new Cookies();
function App() {
  let isLogin;
  if (cookies.get("TOKEN") !== undefined) {
    isLogin = true;
  }
  else {
    isLogin = false;
  }
  return (
    <>
    <NavbarDefault isLogin={isLogin}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/history" element={<History/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/register/success" element={<RegisterSuccess/>}/>
    </Routes>
    </>
  );
}

export default App;