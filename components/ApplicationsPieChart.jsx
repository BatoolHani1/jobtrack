"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { APPLICATION_STATUSES } from "@/lib/statuses";

const STATUS_COLORS = {
  Applied: "#7c2fcb",
  Interview: "#c79bff",
  Offer: "#460b77",
  Rejected: "#756580",
};

export default function ApplicationsPieChart({ statusCounts }) {
  const data = APPLICATION_STATUSES.map((status) => ({
    status,
    count: statusCounts[status],
  }));
  const isEmpty = data.every((entry) => entry.count === 0);

  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto h-72 w-72">
        {isEmpty ? (
          <div className="flex h-full w-full items-center justify-center text-center text-sm text-muted">
            No applications to display yet
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="count" nameKey="status" stroke="none">
                {data.map((entry) => (
                  <Cell key={entry.status} fill={STATUS_COLORS[entry.status]} />
                ))}
              </Pie>
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
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
      <ul className="grid w-full grid-cols-2 gap-x-8 gap-y-2">
        {APPLICATION_STATUSES.map((status) => {
          const count = statusCounts[status];
          return (
            <li key={status} className="flex items-center gap-2 text-sm">
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: STATUS_COLORS[status] }}
              />
              <span className="text-text">{status}</span>
              <span className="text-muted">{count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
