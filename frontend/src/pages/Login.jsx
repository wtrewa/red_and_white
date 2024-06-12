

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginAction, } from "../Redux/Auth/authAction";

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    const { value, name } = e.target;

    console.log(value, name);
    const newState = {
      ...state,
      [name]: value,
    };
    setState(newState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(state));
  };

  return (
    <div className="  p-5 bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Formregister
          </h1>

          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="@email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="password"
              id="password"
              placeholder="password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Login
          </button>
          <button className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">
            <Link to={"/signup"}>Ragister</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
