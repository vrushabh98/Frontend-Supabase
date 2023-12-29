import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DummyAreaChart() {
  const graphData = [
    {
      month: 3,
      Booking: 26,
      name: "Mar",
    },
    {
      month: 4,
      Booking: 245,
      name: "Apr",
    },
    {
      month: 5,
      Booking: 402,
      name: "May",
    },
    {
      month: 6,
      Booking: 300,
      name: "Jun",
    },
    {
      month: 7,
      Booking: 149,
      name: "Jul",
    },
    {
      month: 8,
      Booking: 100,
      name: "Aug",
    },
    {
      month: 9,
      Booking: 76,
      name: "Sep",
    },
    {
      month: 10,
      Booking: 324,
      name: "Oct",
    },
    {
      month: 11,
      Booking: 146,
      name: "Nov",
    },
    {
      month: 12,
      Booking: 200,
      name: "Dec",
    },
  ];

  const labelStyle = {
    fontSize: 10,
    fontWeight: 500,
    fill: "#ADADAD", // Color of the label text
    lineHeight: 10,
    textAlign: "center",
  };

  return (
    <div className="p-2">
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart
          width={1000}
          height={260}
          data={graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2F80ED" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2F80ED" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ ...labelStyle }} />
          <YAxis axisLine={false} tick={{ ...labelStyle }} />
          <Tooltip />
          <Area
            dataKey="Booking"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DummyAreaChart;
