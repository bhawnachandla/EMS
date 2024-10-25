import React, { useState } from "react";

const Login = () => {

  const [email, setEmail]= useState("")
  const [password, setPassword] = useState("")

  const SubmitHandler = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    console.log("email is ", email);
    console.log("Password is ", password);

    // reset the form 
    setEmail("")
    setPassword("")
  };

  return (
    <>
      <div className="container h-screen w-screen flex flex-col justify-center items-center">
        <div className="border border-red-600 p-6 rounded-lg">
          <h1 className="text-2xl mb-5 text-center font-mono">Login</h1>
          <form className="flex flex-col space-y-4 font-mono" onSubmit={(e)=>{SubmitHandler(e)}}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-red-600 rounded-full p-4 w-80 h-12 placeholder:text-gray-400 outline-none bg-transparent"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-red-600 rounded-full p-4 w-80 h-12 placeholder:text-gray-400 outline-none bg-transparent"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />

            <div className="flex justify-between items-center">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 text-red-600"
                />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-red-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <input
              type="submit"
              value="Login"
              className="rounded-full bg-red-500 text-white p-4 w-80 h-12 mt-4 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
