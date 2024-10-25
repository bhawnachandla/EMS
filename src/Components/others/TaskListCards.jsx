import React, {useState} from "react";

const TaskListCards=()=>{
    return(
        <>
        <div className="task-list-cards flex justify-between  m-5 flex-wrap">
            <div className="card1 bg-green-400 w-[24%] p-10 rounded-xl ">
                <h3 className="text-3xl font-semibold">0</h3>
                <h1 className="text-xl font-medium">New Tasks</h1>
            </div>

            <div className="card2 bg-blue-400 w-[24%] p-10 rounded-xl ">
                <h3 className="text-3xl font-semibold">0</h3>
                <h1 className="text-xl font-medium">Failed Tasks</h1>
            </div>

            <div className="card3 bg-yellow-400 w-[24%] p-10 rounded-xl ">
                <h3 className="text-3xl font-semibold">0</h3>
                <h1 className="text-xl font-medium">Completed Tasks</h1>
            </div>

            <div className="card4 bg-red-400 w-[24%] p-10 rounded-xl ">
                <h3 className="text-3xl font-semibold">0</h3>
                <h1 className="text-xl font-medium">Pending Tasks</h1>
            </div>
        </div>
        </>
    )
}

export default TaskListCards;