import React from 'react';

const AverageDailySalesCard = () => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 w-full mx-auto overflow-hidden">
      {/* Content */}
      <div className="mb-14">
        <h3 className="text-gray-500 uppercase text-sm font-semibold tracking-wide">
          Average Daily Sales
        </h3>
        <p className="text-gray-900 font-bold text-2xl mt-1">$28,450</p>
        <p className="text-gray-600 mt-2">Total Sales This Month</p>
      </div>

      {/* Curved Bottom with Gradient....................... */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16"
        viewBox="0 0 400 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7dd3fc" />  {/* sky-300 */}
            <stop offset="100%" stopColor="#0284c7" /> {/* sky-600 */}
          </linearGradient>
        </defs>
        <path
          d="M0 0 Q200 80 400 0 L400 80 L0 80 Z"
          fill="url(#curveGradient)"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default AverageDailySalesCard;
