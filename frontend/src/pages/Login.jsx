import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginAction } from "../Redux/Auth/authAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const user = useSelector((store) => store.authReducer.User);
  const dispatch = useDispatch();
  const [state, setState] = useState(initState);
  const notify = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newState = {
      ...state,
      [name]: value,
    };
    setState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email.trim() === "" || state.password.trim() === "") {
      notifyError("Please fill out all fields.");
      return;
    }
    dispatch(loginAction(state)).then((res) => {
      if (res.status === 200) {
        notify("Login Success !");
        setState(initState); // Clear form state on successful login
      } else {
        notifyError("Login Failed !");
        return 
      }
    });
  };

  return (
    <div className="p-5 bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Login
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
              value={state.email}
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
              type="password" // Changed to password type
              name="password"
              id="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Login
          </button>
        </form>
        {!user?._id &&  <Link to={"/signup"}>
          <button className="w-full mt-6 mb-3 bg-indigo-800 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">
            Register
          </button>
        </Link>}
       
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
