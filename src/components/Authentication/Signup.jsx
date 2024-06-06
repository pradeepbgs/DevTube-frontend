import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    fullname:'',
    email: '',
    password: '',
    avatar: null,
    coverImage: null,
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('username', formData.username);
    data.append('fullname', formData.fullname);
    data.append('email', formData.email);
    data.append('password', formData.password);
    if (formData.avatar) {
      data.append('avatar', formData.avatar);
    }
    if (formData.coverImage) {
      data.append('coverImage', formData.coverImage);
    }
   try {
    const res = await axios.post(
      "/api/v1/users/register",
      data,
      {
        withCredentials: true
      }
    )

    console.log(`this is response ${res}`)
    navigate('/login');
   } catch (error) {
    setError(error?.response?.data?.message);
   }
    // console.log(formData);
  };

  return (
    <div className="text-white w-screen h-full flex justify-center items-center">
      <div
        className="bg-blue-300 w-[40vw] h-[80vh] flex justify-center 
      items-center rounded-lg bg-opacity-10"
      >
        <div className="text-center">
          <h1 className="text-2xl mb-2 font-semibold">Register</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-fit mb-3 mt-5"
          >
            <input
              type="text"
              name="username"
              className="bg-gray-800 w-[30vw] px-5 mb-4 py-3 rounded-md"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
            <input 
            type="text" 
            name="fullname" 
            className="bg-gray-800 w-[30vw] px-5 mb-4 py-3 rounded-md"
            value={formData.fullname}
            onChange={handleChange}
            placeholder='Enter your Fullname'
            id="" />

            <input
              type="text"
              name="email"
              className="bg-gray-800 px-5 mb-4 py-3 rounded-md"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="bg-gray-800 px-5 py-3 mb-4 rounded-md"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            Avatar
            <input
              type="file"
              name="avatar"
              className="bg-gray-800 px-5 py-3 mb-4 rounded-md"
              onChange={handleChange}
            />
            coverImage
            <input
              type="file"
              name="coverImage"
              className="bg-gray-800 px-5 py-3 mb-4 rounded-md"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-500 px-5 py-3 rounded-md"
            >
              Register
            </button>
          </form>
          <span className="hover:text-blue-400 hover:underline">
            <a href="/login">Already a user? Login</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
