import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import NotFound from "./Pages/Authentication/NotFound";
import DashboardIndex from "./Pages/Dashboard/DashboardIndex";
import UserWithAPI from "./Pages/Users/UserWithAPI";
import UserWithDB from "./Pages/Users/UserWithDB";

function App() {
  const [userData, setuserData] = useState(false);
  const loggedInUser = JSON.parse(sessionStorage.getItem("user"));

  return (
    <HashRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />

        <Route path="/" element={<DashboardIndex />} />
        <Route path="/userwithapi" element={<UserWithAPI />} />
        <Route path="/userwithdb" element={<UserWithDB />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
