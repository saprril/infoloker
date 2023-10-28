import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { NavbarDefault } from "./components/NavbarDefault";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { Detail } from "./pages/Detail";
import { Liked } from "./pages/Liked";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
    <NavbarDefault/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/history" element={<History/>}/>
      <Route path="/detail/:_id" element={<Detail/>}/>
      <Route path="/liked" element={<Liked/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </>
  );
}

export default App;