import React from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./Components/DashBoard/AdminDashboard";
function App(){
  return(
    <>
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    <AdminDashboard/>
    </>
  )
}

export default App;