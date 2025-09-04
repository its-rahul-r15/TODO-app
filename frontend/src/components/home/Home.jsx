import React from 'react'
import bgImg from '../../assets/manpower_01.webp'
import Header from '../header/Header'
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate();
  return (
    <>
    <Header/>
   <div className="flex justify-center items-center text-center bg-[#f7f8f9] mx-4 rounded-lg mt-20 md:mt-10 lg:mt-5">
  <div className="items-center p-6 md:p-12 lg:p-20 xl:p-22 max-w-6xl">
    <h1 className="text-6xl md:text-5xl lg:text-7xl xl:text-7xl font-bold leading-tight">
      Effortless task management,{" "}
      <span className="text-amber-300">anytime</span> 
    </h1>

    <p className="mt-5 md:mt-7 font-semibold text-sm md:text-base lg:text-lg">
      Manage task and projects with an all in one platform. <br />
      Designed by <span className="text-amber-700">Rahul Sharma</span>
    </p>

    <button
      onClick={() => navigate("/todos")}
      className="p-2 px-6 mt-6 md:mt-8 bg-blue-600 rounded-xl text-base md:text-xl text-white cursor-pointer"
    >
      Get Started
    </button>

    <img
      className="mt-6 md:mt-10 w-full max-w-xs md:max-w-md lg:max-w-2xl mx-auto"
      src={bgImg}
      alt="image"
    />
  </div>
</div>

    </>
  )
}

export default Home