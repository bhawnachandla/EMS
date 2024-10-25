import React from "react";
import { useState } from "react";
import Header from "../others/Header";
import TaskListCards from "../others/TaskListCards";
import TaskList from "../others/TaskList";


const EmployeeDashboard = ()=>{
    return(
        <>
        <Header/>
        <TaskListCards/>
        <TaskList/>
        </>
    )
}

export default EmployeeDashboard;