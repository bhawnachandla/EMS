import React from "react";

const CreateTask = () => {
  return (
    <div className="m-5 p-5 bg-[#282828] shadow-2xl ">
        <h1 className="text-3xl font-semibold text-center ">Create Task</h1>
      <div className="Form flex justify-center mt-8 font-semibold">
        <form
          action="#"
          className="w-full max-w-6xl flex justify-between space-x-6  "
        >
          {/* Left side card1 */}
          <div className="card1 w-1/2 space-y-4">
            <div>
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                placeholder="Enter title"
                className="w-full bg-transparent border rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="category">Category</label>
              <br />
              <input
                type="text"
                placeholder="Enter category"
                className="w-full bg-transparent border rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="date">Date</label>
              <br />
              <input
                type="date"
                className="w-full bg-transparent border rounded-md p-2"
                placeholder="dd/mm/yy"
              />
            </div>

            <div>
              <label htmlFor="assignTo">Assign To</label>
              <br />
              <input
                type="text"
                placeholder="Assign to"
                className="w-full bg-transparent border rounded-md p-2"
              />
            </div>
          </div>

          {/* Right side card2 */}
          <div className="card2 w-1/2 space-y-4">
            <div>
              <label htmlFor="description">Description</label>
              <br />
              <textarea
                className="w-full bg-transparent border rounded-md p-2 h-32"
                placeholder="Enter description"
              ></textarea>
            </div>

            <button className="bg-emerald-500 text-white rounded-lg p-2 w-full hover:bg-emerald-600 transition duration-300">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
