"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    date: "2021-01-01",
    installs: 4000,
  },
  {
    date: "2021-02-01",
    installs: 3000,
  },
  {
    date: "2021-03-01",
    installs: 2000,
  },
  {
    date: "2021-04-01",
    installs: 2780,
  },
  {
    date: "2021-05-01",
    installs: 1890,
  },
  {
    date: "2021-06-01",
    installs: 2390,
  },
  {
    date: "2021-07-01",
    installs: 3490,
  },
  {
    date: "2021-08-01",
    installs: 4000,
  },
  {
    date: "2021-09-01",
    installs: 3000,
  },
  {
    date: "2021-10-01",
    installs: 2000,
  },
  {
    date: "2021-11-01",
    installs: 2780,
  },
  {
    date: "2021-12-01",
    installs: 1890,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="installs"
          stroke="var(--themeColor)"
          fill="#ffedad"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
