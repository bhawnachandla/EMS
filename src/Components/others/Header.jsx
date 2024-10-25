import React from "react";

const Header = () => {
  return (
    <>
      <div className="container flex justify-between items-center p-5 bg-[#icicici]-800 ">
        {/* Greeting Section */}
        <div className="text-lg ">
          <h1 className="text-2xl font-medium">
            Hello! <br /><span className="font-semibold text-4xl ">bhawna 👋</span>
          </h1>
        </div>

        {/* Logout Button */}
        <button className="bg-red-600 text-white px-5 py-2  rounded-sm hover:bg-red-700 transition duration-300">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
