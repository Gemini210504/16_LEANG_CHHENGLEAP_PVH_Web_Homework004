import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="flex gap-3">
        {dashboard.map((board) => (
          <div className="flex flex-1 bg-white py-3.5 p-4 rounded-xl w-[260px]">
            <div className={`p-3 rounded-xl ${board.color}`}>
              <img src={board.icon} alt={board.label} />
            </div>
            <div>
              <p className="font-semibold text-[22px] ml-2">
                {board.totalTasks}
              </p>
              <p className="text-gray-400 text-[14px] ml-2 ">{board.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
