import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { singupAction } from "../Redux/Auth/authAction";

const initState = {
  image: "",
  name: "",
  email: "",
  phone: "",
  gender: "male",
  password: "",
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const Signup = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name || form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }

    if (!form.email || !validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone || isNaN(form.phone)) {
      newErrors.phone = "Phone number must be numeric.";
    }

    if (!form.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!form.password) {
      newErrors.password = "Please enter a password.";
    }

    if (!form.image) {
      newErrors.image = "Please enter an image link.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Form submitted successfully!");
      dispatch(singupAction(form));
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };

  return (
    <div className="p-5 bg-indigo-100 flex justify-center items-center">
      <ToastContainer />
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Signup
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="image"
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
            {errors.image && <p className="text-red-500">{errors.image}</p>}
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="name"
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
            {errors.name && <p className="text-red-500">{errors.name}</p>}
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
            {errors.email && <p className="text-red-500">{errors.email}</p>}
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
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div onChange={handleChange}>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="gender"
            >
              Gender
            </label>
            <div>
              <input
                className="bg-gray-100 py-2 rounded-lg focus:outline-none"
                type="radio"
                name="gender"
                id="male"
                value="male"
              />
              <label
                className="text-gray-800 font-semibold my-3 text-md inline-block ml-2"
                htmlFor="male"
              >
                Male
              </label>
            </div>
            <div>
              <input
                className="bg-gray-100 py-2 rounded-lg focus:outline-none"
                type="radio"
                name="gender"
                id="female"
                value="female"
              />
              <label
                className="text-gray-800 font-semibold my-3 text-md inline-block ml-2"
                htmlFor="female"
              >
                Female
              </label>
            </div>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
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
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Register
          </button>
        </form>
        <Link to={"/login"}>
          {" "}
          <button className="w-full mt-6 mb-3 bg-indigo-800 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
