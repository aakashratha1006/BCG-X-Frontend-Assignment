import React from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const CustomLineChart = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) return null;

  const chartData = data.map((value, index) => ({
    name: index,
    value: value
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData}>
        <Tooltip 
          contentStyle={{ 
            background: 'rgba(255, 255, 255, 0.8)',
            border: 'none',
            borderRadius: '4px',
            padding: '2px 4px',
            fontSize: '12px'
          }}
          formatter={(value) => [value]}
          labelStyle={{ display: 'none' }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#1E90FF"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;



