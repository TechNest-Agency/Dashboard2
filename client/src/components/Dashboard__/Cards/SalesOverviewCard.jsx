import React from "react";
import { FiShoppingBag, FiEye } from "react-icons/fi";

const SalesOverviewCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      {/* Title and Improvement.......................*/}
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 font-semibold">Sales Overview</h3>
        <span className="text-green-500 font-semibold">+18.2%</span>
      </div>

      {/* Amount........................ */}
      <p className="text-gray-900 font-semibold text-2xl mt-4">
        $42.5k
      </p>

      {/* Orders vs Visits Section...................... */}
      <div className="flex items-center justify-around mt-6 p-4 bg-gray-50 rounded-md">

        {/* Orders..................... */}
        <div>
          {/* Icon and Text in Same Row.............. */}
          <div className="flex items-center space-x-2">
            <FiShoppingBag className="text-blue-500" size={24} />
            <span className="text-gray-500">Order</span>
          </div>
          {/* Values .................*/}
          <p className="text-gray-900 font-semibold mt-2">62.2%</p>
          <p className="text-gray-900 font-semibold">6,440</p>
        </div>

        {/* VS separator................. */}
        <div className="text-gray-500 font-semibold px-4">vs</div>

        {/* Visits .......................*/}
        <div>
          {/* */}
          <div className="flex items-center space-x-2">
            <FiEye className="text-purple-500" size={24} />
            <span className="text-gray-500">Visits</span>
          </div>
          {/* Values ............. */}
          <p className="text-gray-900 font-semibold mt-2">25.5%</p>
          <p className="text-gray-900 font-semibold">12,749</p>
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewCard;
