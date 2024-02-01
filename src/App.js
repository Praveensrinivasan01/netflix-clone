import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/Home/HomeScreen";
import users from "./user.json"

const App = () => {
  const [userDetails,setUserDetails]=useState(users)
  console.log("USER DETAILS",userDetails)
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
