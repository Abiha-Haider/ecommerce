import React from "react";

export const Subscribe = () => {
  return (
    <div className=" lg:mt-20 lg:mb-20 lg:p-20 lg:ml-60 mb-5 mx-auto justify-items-center ">
      <h1 className=" text-4xl font-bold mt-10 text-gray-800 dark:text-white">
        Subscribe our Newsletter
      </h1>
      <h2 className=" text-lg mt-2 text-gray-500 dark:text-white">
        Get the latest information and promo offers directly
      </h2>
      <div className="flex flex-col  mt-6 space-y-3 md:space-y-0 md:flex-row">
        <input
          id="email"
          type="text"
          className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="Email Address"
        />

        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
          Subscribe
        </button>
      </div>
      
    </div>
  );
};
