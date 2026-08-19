"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ApplicationsOverTimeChart({ data }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid vertical={false} stroke="#e5ddf2" />
          <XAxis
            dataKey="label"
            tick={{ fill: "#756580", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fill: "#756580", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="count" fill="#7c2fcb" radius={[4, 4, 0, 0]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5ddf2",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              color: "#24152f",
            }}
            itemStyle={{ color: "#24152f" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
