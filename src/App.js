import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/Home/HomeScreen";
import users from "./user.json"
import "./App.css"
import Profile from "./Pages/Profile/Profile";

const App = () => {
  const jsonUser = useRef(users)
  const userDetails = jsonUser.current
  const user = {
    name:userDetails['firstaname'] + " " + userDetails['lastname'],
    email:userDetails['email']
  };
  return (
    <div className="app">
      <Router>
        {!user ? (
          <div>Login Screen</div>
        ) : (
          <Routes>
              <Route path='/profile' element={<Profile />} />
            <Route path="/" element={<HomeScreen/>} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
