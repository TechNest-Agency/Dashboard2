import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { FiHeadphones, FiPlusCircle, FiClock, FiFolder } from "react-icons/fi";

const data = [
  { name: "Open Tickets", value: 28, color: "#3b82f6" }, // Sky-500
  { name: "Closed Tickets", value: 136, color: "#93c5fd" }, // Sky-300
];

// Needle component
const Needle = ({ cx, cy, midAngle, length = 80, color = "#ef4444" }) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const x = cx + length * cos;
  const y = cy + length * sin;

  return (
    <>
      <line
        x1={cx}
        y1={cy}
        x2={x}
        y2={y}
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={6} fill={color} stroke="none" />
    </>
  );
};

const PieChartWithNeedle = ({ data }) => {
  const total = data.reduce((acc, cur) => acc + cur.value, 0);
  const openIndex = data.findIndex((d) => d.name === "Open Tickets");
  if (openIndex === -1) return null;

  const openTicket = data[openIndex].value;
  const beforeSum = data.slice(0, openIndex).reduce((acc, cur) => acc + cur.value, 0);

  // Mid angle of open ticket slice (degrees)...........
  const midAngle = 360 * ((beforeSum + openTicket / 2) / total) - 90;

  const cx = 150;
  const cy = 150;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx={cx}
          cy={cy}
          startAngle={90}
          endAngle={-270}
          innerRadius="65%"
          outerRadius="85%"
          paddingAngle={3}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Needle cx={cx} cy={cy} midAngle={midAngle} color="#ef4444" />
        {/* Center Text */}
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-gray-700 font-semibold"
          style={{ fontSize: 20 }}
        >
          85% Completed
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

const SupportTracker = () => {
  return (
    <div className="bg-white p-4 w-[90%] md:w-full  rounded-lg shadow-lg  mx-auto">
      <h2 className="text-gray-900 text-xl font-semibold mb-4">Support Tracker</h2>

      {/* Header: Last 7 Days & Total Tickets..................... */}
      <div className="flex items-center justify-between mb-0 lg:mb-4">
        <div className="flex items-center space-x-2">
          <FiHeadphones size={28} className="text-sky-500" />
          <div>
            <p className="text-gray-600 text-sm">Last 7 Days</p>
            <p className="text-2xl font-bold text-gray-900">164</p>
            <p className="text-gray-400 text-xs">Total Tickets</p>
          </div>
        </div>
      </div>

      {/* Pie Chart + Stats.................... */}
      <div className="flex flex-col lg:flex-row  items-center justify-between w-[90%] md:w-full mx-auto">
        <div style={{ width: 280, height: 280 }}>
          <PieChartWithNeedle data={data} />
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col justify-evenly gap-4 space-y-6 ml-4">
          <div className="flex items-center space-x-3">
            <FiPlusCircle size={28} className="text-green-500" />
            <div>
              <p className="text-lg font-semibold text-gray-900">142</p>
              <p className="text-gray-500 text-sm">New Tickets</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <FiFolder size={28} className="text-sky-500" />
            <div>
              <p className="text-lg font-semibold text-gray-900">28</p>
              <p className="text-gray-500 text-sm">Open Tickets</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <FiClock size={28} className="text-yellow-500" />
            <div>
              <p className="text-lg font-semibold text-gray-900">1 Day</p>
              <p className="text-gray-500 text-sm">Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTracker;
