import React, { useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa"; // Import the hamburger icon
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toggleMenu } from "../../utils/toggleSlice";
import axios from "axios";
import {logout} from '../../utils/authSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const formHandler = (e) => {
    e.preventDefault();
    navigate("/results");
  };

  const logoutUser = async () => {
    try {
      await axios.post("http://localhost:3000/api/v1/users/logout", null, {
        withCredentials: true,
      });
      dispatch(logout());
      navigate("/");
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {}, [isLoggedIn]);

  return (
    <div className="w-full">
      <div>
        <nav className="bg-black px-10 py-3 text-white text-center border border-x-0 border-t-0">
          <ul className="flex justify-between items-center">
            <div className="flex items-center">
              <FaBars
                onClick={toggleMenuHandler}
                className="mr-7 cursor-pointer hover:text-gray-300 text-[1.3rem]"
              />
              <button className="hover:underline text-[1.3rem]">
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-purple-300" : "text-gray-200"}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </button>
            </div>
            <div>
              <form onSubmit={formHandler} className="flex items-center">
                <label
                  className="border border-gray-500 px-2 py-3 border-r-0"
                  htmlFor=""
                >
                  <FaSearch />
                </label>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-black text-white w-[26vw] border border-l-0 border-gray-500 px-3 py-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-3 py-2 ml-2 border border-gray-500 focus:outline-none"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="flex items-center">
              {!isLoggedIn ? (
                <div>
                  <button className="mr-3 bg-black hover:bg-gray-700 px-3 py-2 rounded-full focus:outline-none">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="bg-purple-500 hover:bg-purple-700 px-3 py-2 rounded-full focus:outline-none">
                    <Link to="/signup">Signup</Link>
                  </button>
                </div>
              ) : (
                <button
                  onClick={logoutUser}
                  className="bg-purple-500 hover:bg-purple-700 px-3 py-2 rounded-full cursor-pointer"
                >
                  Logout
                </button>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
