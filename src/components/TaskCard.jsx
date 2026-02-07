


import React from "react";

const priorityColors = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const statusColors = {
  "To Do": "bg-gray-200 text-gray-700",
  "In Progress": "bg-blue-100 text-blue-700",
  "Done": "bg-green-100 text-green-700",
};

const TaskCard = ({ task, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border rounded-lg p-3 shadow-sm cursor-pointer hover:shadow-md transition-all"
    >
      {/* Title */}
      <h3 className="font-semibold text-sm mb-1 truncate">
        {task.title}
      </h3>

      {/* Description */}
      {task.description && (
        <p className="text-xs text-gray-500 mb-2 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Tags */}
      {task.tags && task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {task.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center mt-2">

        {/* Priority */}
        <span
          className={`text-[10px] px-2 py-1 rounded-full font-semibold ${
            priorityColors[task.priority] || "bg-gray-100 text-gray-600"
          }`}
        >
          {task.priority}
        </span>

        {/* Status */}
        <span
          className={`text-[10px] px-2 py-1 rounded-full font-medium ${
            statusColors[task.status] || "bg-gray-100 text-gray-600"
          }`}
        >
          {task.status}
        </span>

      </div>
    </div>
  );
};

export default TaskCard;
