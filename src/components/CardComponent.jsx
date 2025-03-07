import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ project }) {
  const { projectName, dueDate, progress, description } = project;

  const calculateProgress = () => {
    return `${progress}%`;
  };

  const calculateRemainingDays = (dueDate) => {
    const dueDateObj = new Date(dueDate);
    const currentDate = new Date();
    const differenceInTime = dueDateObj - currentDate;
    const differenceInDays = Math.ceil(
      differenceInTime / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays < 0) {
      return "Deadline";
    }

    if (differenceInDays >= 7) {
      const weeks = Math.floor(differenceInDays / 7);
      return `${weeks} week${weeks > 1 ? "s" : ""} left`;
    }

    return `${differenceInDays} day${differenceInDays > 1 ? "s" : ""} left`;
  };

  const progressColor = (progress) => {
    if (progress === 100) return "bg-[#59D5E0]";
    if (progress >= 75) return "bg-custom-carrot";
    if (progress >= 50) return "bg-custom-yellow-500";
    if (progress >= 25) return "bg-custom-pink";
    return "bg-gray-300";
  };

  const dueDateColor = (progress) => {
    if (progress === 100) return "text-[#59D5E0]";
    if (progress >= 75) return "text-custom-carrot";
    if (progress >= 50) return "text-custom-yellow-500";
    if (progress >= 25) return "text-custom-pink";
    return "text-gray-300";
  };

  const formattedDate = (date) => {
    const options = {
      
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const newDate = new Date(date).toLocaleDateString("en-US", options);
    return newDate;
  };
  
  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex justify-between mb-5 ">
          {/* Date */}
          <p className={`${dueDateColor(progress)} font-medium`}>
            {formattedDate(dueDate)}
          </p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {projectName}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {description}
        </p>

        {/* Progress Bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{progress}%</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className={`h-2.5 rounded-full ${progressColor(progress)}`}
            style={{ width: calculateProgress() }}
          ></div>
        </div>

        {/* Deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-30 text-center">
            {`${calculateRemainingDays(dueDate)}`}
          </p>
        </div>
      </div>
    </div>
  );
}
