"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function UserGrowthChart({data}) {
  console.log(data, 'users growth')
  return (
    <div className="bg-[#1D232A] rounded-3xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-white">
        User Growth
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
            />

            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
            />

            <YAxis stroke="#9CA3AF" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#3B82F6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}