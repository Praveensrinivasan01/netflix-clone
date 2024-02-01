import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/Home/HomeScreen";
import users from "./user.json"
import "./App.css"

const App = () => {
  const jsonUser = useRef(users)
  const userDetails = jsonUser.current
  const user = {
    name:userDetails['firstaname'] + " " + userDetails['lastname'],
    email:userDetails['email']
  };
  return (
    <div>
      <Router>
        {!user ? (
          <div>Login Screen</div>
        ) : (
          <Routes>
            {/* <Route path='/profile' element={} /> */}
            <Route path="/" element={<HomeScreen/>} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
