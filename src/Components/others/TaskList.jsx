import React from "react";
import "./tasklist.css";

const TaskList = () => {
  return (
    <div className="mt-10 w-full h-[40vh] m-5 overflow-hidden">
      <div
        className="task-list-content w-full h-full flex gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide"
        id="tasklist"
      >
        {/* Different background colors for each task item */}
        <div className="bg-orange-400 flex-shrink-0 h-full w-[300px] rounded-xl">
          <div className="flex justify-between items-center m-5">
            <button className="bg-red-500 rounded px-5 py-2 ">High</button>
            <h2>29/03/2024</h2>
          </div>
          <h1 className="font-bold text-xl ml-5">Complete your task today </h1>
          <p className="flex flex-start ml-5 ">
            Lorem ipsum dolor sit amet A quae velit ex maiores culpa excepturi
            quod maxime ut?
          </p>
        </div>

        <div className="bg-green-400 flex-shrink-0 h-full w-[300px] rounded-xl">
       
          <div className="flex justify-between items-center m-5">
            <button className="bg-red-500 rounded px-5 py-2 ">High</button>
            <h2>29/03/2024</h2>
          </div>
          <h1 className="font-bold text-xl ml-5">Complete your task today </h1>
          <p className="flex flex-start ml-5 ">
            Lorem ipsum dolor sit amet A quae velit ex maiores culpa excepturi
            quod maxime ut?
          </p>
          
        </div>
        <div className="bg-blue-400 flex-shrink-0 h-full w-[300px] rounded-xl">
          
          <div className="flex justify-between items-center m-5">
            <button className="bg-red-500 rounded px-5 py-2 ">High</button>
            <h2>29/03/2024</h2>
          </div>
          <h1 className="font-bold text-xl ml-5">Complete your task today </h1>
          <p className="flex flex-start ml-5 ">
            Lorem ipsum dolor sit amet A quae velit ex maiores culpa excepturi
            quod maxime ut?
          </p>
          
        </div>
        <div className="bg-purple-400 flex-shrink-0 h-full w-[300px] rounded-xl">
          
          <div className="flex justify-between items-center m-5">
            <button className="bg-red-500 rounded px-5 py-2 ">High</button>
            <h2>29/03/2024</h2>
          </div>
          <h1 className="font-bold text-xl ml-5">Complete your task today </h1>
          <p className="flex flex-start ml-5 ">
            Lorem ipsum dolor sit amet A quae velit ex maiores culpa excepturi
            quod maxime ut?
          </p>
          
        </div>
        <div className="bg-yellow-400 flex-shrink-0 h-full w-[300px] rounded-xl">
          
          <div className="flex justify-between items-center m-5">
            <button className="bg-red-500 rounded px-5 py-2 ">High</button>
            <h2>29/03/2024</h2>
          </div>
          <h1 className="font-bold text-xl ml-5">Complete your task today </h1>
          <p className="flex flex-start ml-5 ">
            Lorem ipsum dolor sit amet A quae velit ex maiores culpa excepturi
            quod maxime ut?
          </p>
          
        </div>
        <div className="bg-red-400 flex-shrink-0 h-full w-[300px] rounded-xl">
          
          <div className="flex justify-between items-center m-5">
            <button className="bg-red-500 rounded px-5 py-2 ">High</button>
            <h2>29/03/2024</h2>
          </div>
          <h1 className="font-bold text-xl ml-5">Complete your task today </h1>
          <p className="flex flex-start ml-5 ">
            Lorem ipsum dolor sit amet A quae velit ex maiores culpa excepturi
            quod maxime ut?
          </p>
          
        </div>
        <div className="bg-teal-400 flex-shrink-0 h-full w-[300px] rounded-xl">
          
          <div className="flex justify-between items-center m-5">
            <button className="bg-red-500 rounded px-5 py-2 ">High</button>
            <h2>29/03/2024</h2>
          </div>
          <h1 className="font-bold text-xl ml-5">Complete your task today </h1>
          <p className="flex flex-start ml-5 ">
            Lorem ipsum dolor sit amet A quae velit ex maiores culpa excepturi
            quod maxime ut?
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default TaskList;
