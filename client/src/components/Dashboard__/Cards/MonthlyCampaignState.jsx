import React from "react";
import {
  FiUsers,
  FiMail,
  FiEye,
  FiUserPlus,
  FiAlertTriangle,
} from "react-icons/fi";

const MonthlyCampaignState = () => {
  const data = [
    {
      label: "Social Visitors",
      number: "8.52k",
      percentage: "+0.3%", 
      icon: <FiUsers size={30} color="#06b6d5" />,
      shadowColor: "shadow-cyan-500/30",
    },
    {
      label: "Emails",
      number: "12,346",
      percentage: "+2.1%", 
      icon: <FiMail size={30} color="#9333ea" />,
      shadowColor: "shadow-purple-500/30",
    },
    {
      label: "Opened",
      number: "8,734",
      percentage: "+1.4%", 
      icon: <FiEye size={30} color="#facc15" />,
      shadowColor: "shadow-yellow-500/30",
    },
    {
      label: "Subscribe",
      number: "345",
      percentage: "+1.5%", 
      icon: <FiUserPlus size={30} color="#10b981" />,
      shadowColor: "shadow-green-500/30",
    },
    {
      label: "Complaints",
      number: "10",
      percentage: "+0.8%", 
      icon: <FiAlertTriangle size={30} color="#f97316" />,
      shadowColor: "shadow-orange-500/30",
    },
    {
      label: "Unsubscribe",
      number: "86",
      percentage: "+0.8%", 
      icon: <FiAlertTriangle size={30} color="#64748b" />,
      shadowColor: "shadow-gray-500/30",
    },
  ];

  return (
    <div className="bg-gray-50 p-5 rounded-2xl shadow-md">
      <h2 className="text-gray-900 font-semibold text-xl md:text-2xl mb-2">
        Monthly Campaign State
      </h2>
      <h3 className="mb-4 font-semibold">8.52k+ Social Visitors</h3>

      {/* Cards .................... */}
      <div className="flex flex-wrap gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex-1 basis-[30%] min-w-[160px] 
              bg-white p-4 rounded-md transform transition hover:translate-y-[-5px] hover:shadow-2xl 
              shadow-md text-center ${item.shadowColor}`}
          >
            <div className="mb-3 flex items-center justify-center">
              {item.icon}
            </div>

            <p className="text-gray-900 font-semibold text-2xl">
              {item.number}
            </p>

            <p className="text-gray-500 mt-1">
              {item.percentage}
            </p>

            <span className="text-gray-500 mt-2 block">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyCampaignState;
