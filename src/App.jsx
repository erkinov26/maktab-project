/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./ui-components/Navbar";
import LogIn from "./pages/LogIn";
import { useState } from "react";
import { useSelector } from "react-redux";
import Main from "./pages/Main";

function App() {
  const LOGIN_ACCESS = useSelector(
    (state) => state.auth.access.isAuthenticated
  );
  console.log("🚀 ~ file: App.jsx:13 ~ App ~ LOGIN_ACCESS:", LOGIN_ACCESS);
  return (
    <>
      <Routes>
        {LOGIN_ACCESS ? <Navbar /> : null}
        <Route path="/" element={<LogIn />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
