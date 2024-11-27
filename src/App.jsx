import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./Components/DashBoard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./Context/AuthProvider.js";
function App(){

 const [user, setUser]= useState(null)
  const handleLogin =(email, password)=>{
    if (email==='admin@me.com' && password ==='123'){
     setUser('admin')
    }
    else if(email==='emp@me.com' && password ==='1234'){
     setUser('Employee')
      
    }
    else{
      alert("invalid credentials");
    }

  }
  const data= useContext(AuthContext)
  return(
    <>
    {user===null ? <Login handleLogin={handleLogin}/>:
    <>
    {user ==='admin' ? <AdminDashboard/> : <EmployeeDashboard/> }
    </>
    }
   
    </>
  )
}

export default App;