import React, { useState } from "react";
import DefaultLayout from "./components/layout/DefaultLayout";
import {Login, Signup} from "./components/index";
import {Routes, Route, Navigate} from 'react-router-dom'
function App() {
  const userId = localStorage.getItem('userId');
    const [isUser ,setIsUser] = useState(userId ? true : false);
    console.log(isUser);
    const handleLogin = (ID) => {
      console.log(ID);
      localStorage.setItem('userId', ID);
      setIsUser(true);
    }
  return isUser ? <DefaultLayout isUser={isUser} /> :
  <Routes>
    <Route path='/login' element={<Login onLogin={handleLogin}/>} />
    <Route path='/signup' element={<Signup />}/>
    <Route path="*" element={<Navigate to='/login'replace />} />
  </Routes>

}

export default App;