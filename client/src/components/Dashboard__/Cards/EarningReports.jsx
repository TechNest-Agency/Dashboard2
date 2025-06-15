import React from "react";
import { FiDollarSign, FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "w-1", earnings: 320 },
  { name: "w-2", earnings: 370 },
  { name: "w-3", earnings: 410 },
  { name: "w-4", earnings: 380 },
  { name: "w-5", earnings: 450 },
  { name: "w-6", earnings: 490 },
];

// This could come from your API
const EarningReports = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-2xl shadow-md">
      {/* Header Section..................... */}
      <h2 className="text-2xl font-semibold">Earning Reports</h2>
      <p className="text-gray-500 mt-1">Weekly Earnings Overview</p>

      {/* First row: two cards side by side.............. */}
      <div className="flex gap-4 mt-5 md:mt-6 lg:mt-5">
     
        {/* Profit Card............... */}
        <div className="bg-green-100 p-4 rounded-lg flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <FiTrendingUp className="text-green-600 text-xl" />
            <h3 className="text-gray-500 font-semibold">Profit</h3>
          </div>
          <p className="text-2xl font-semibold">$628.45</p>
          <div className="mt-4 bg-green-300 rounded h-2 w-full overflow-hidden">
            <div className="bg-green-600 h-2" style={{ width: "60%" }}></div>
          </div>
        </div>
         {/* Expense Card................ */}
        <div className="bg-red-100 p-4 rounded-lg flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <FiTrendingDown className="text-red-600 text-xl" />
            <h3 className="text-gray-500 font-semibold">Expense</h3>
          </div>
          <p className="text-2xl font-semibold">$312.90</p>
          <div className="mt-4 bg-red-300 rounded h-2 w-full overflow-hidden">
            <div className="bg-red-600 h-2" style={{ width: "25%" }}></div>
          </div>
        </div>
      </div>

      {/* Second row: expense + bar chart side by side.................. */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
  {/* Earnings Card -...................... */}
  <div className="bg-blue-100 p-3 rounded-lg w-full mx-auto sm:w-2/5">
    <div className="flex items-center justify-center space-x-2 mb-2">
      <FiDollarSign className="text-blue-600 text-xl" />
      <h3 className="text-gray-500 font-semibold text-center">Earnings</h3>
    </div>
    <p className="text-2xl font-semibold text-center">$1,245.89</p>
    <p className="text-green-500 mt-2 text-center">
      +4.2% — You improved this week
      <br />
      comparing to last week
    </p>
   
  </div>

  {/* Bar Chart Section ........................ */}
  <div className="bg-gray-100 p-4 rounded-lg w-full mx-auto sm:w-3/5">
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={data}>
        <Tooltip />
        <Bar dataKey="earnings" fill="#0ea5e9" radius={[10, 10, 0, 0]} barSize={12} />
        <XAxis dataKey="name" label={{ value: "Week", position: "insideBottomRight", offset: -5 }} />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

    </div>
  );
};

export default EarningReports;
