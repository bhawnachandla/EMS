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
        <div className="bg-orange-400 flex-shrink-0 h-full w-[300px] rounded-xl">Task 1</div>
        <div className="bg-green-400 flex-shrink-0 h-full w-[300px] rounded-xl">Task 2</div>
        <div className="bg-blue-400 flex-shrink-0 h-full w-[300px] rounded-xl">Task 3</div>
        <div className="bg-purple-400 flex-shrink-0 h-full w-[300px] rounded-xl">Task 4</div>
        <div className="bg-yellow-400 flex-shrink-0 h-full w-[300px] rounded-xl">Task 5</div>
        <div className="bg-red-400 flex-shrink-0 h-full w-[300px] rounded-xl">Task 6</div>
        <div className="bg-teal-400 flex-shrink-0 h-full w-[300px] rounded-xl">Task 7</div>
      </div>
    </div>
  );
};

export default TaskList;
