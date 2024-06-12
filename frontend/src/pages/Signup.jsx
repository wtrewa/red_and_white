import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { singupAction } from "../Redux/Auth/authAction";

const initState = {
  image: "",
  name: "",
  email: "",
  phone: "",
  gender: "male",
  password: "",
};

const Signup = () => {
  const dispatch = useDispatch()
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
    e.preventDefault()
    dispatch(singupAction(state));
  };

  return (
    <div className="  p-5 bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Formregister
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="username"
            >
              Image
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="image"
              id="image"
              placeholder="Image Link"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="username"
            >
              Name
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
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
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="phone"
              id="phone"
              placeholder="+91 9234567821"
              onChange={handleChange}
            />
          </div>
          <div onChange={handleChange}>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="phone"
            >
              Gender
            </label>

            <div>
              <input
                className=" bg-gray-100  py-2 rounded-lg focus:outline-none"
                type="radio"
                name="gender"
                id="male"
                value={"male"}
              />
              <label
                className="text-gray-800 font-semibold my-3 text-md inline-block ml-2"
                htmlFor="password"
              >
                Male
              </label>
            </div>
            <div>
              <input
                className=" bg-gray-100  py-2 rounded-lg focus:outline-none"
                type="radio"
                name="gender"
                id="female"
                value={"female"}
              />
              <label
                className="text-gray-800 font-semibold  my-3 text-md inline-block ml-2"
                htmlFor="password"
              >
                Female
              </label>
            </div>
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
            Register
          </button>
          <button className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">
            <Link to={"/login"}>Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
