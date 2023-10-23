import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { NavbarDefault } from "./components/NavbarDefault";
import { LikeButton } from "./components/LikeButton";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
function App() {
  return (
    <>
    <NavbarDefault/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/> 
    </Routes>
    </>
  );
}

export default App;