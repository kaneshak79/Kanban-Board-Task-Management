


import React from "react";
import { useDroppable } from "@dnd-kit/core";
import SortableTaskCard from "./SortableTaskCard";

const Column = ({ columnId, title, tasks, onTaskClick }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: columnId,
  });

  return (
    <div
      ref={setNodeRef}
      className={`bg-white rounded-xl p-4 shadow-sm border min-h-[500px] flex flex-col
        ${isOver ? "ring-2 ring-blue-400" : ""}`}
    >
      {/* Column Header */}
      <h2 className="text-lg font-bold mb-4 flex justify-between items-center">
        <span>{title}</span>
        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
          {tasks.length}
        </span>
      </h2>

      {/* Tasks */}
      <div className="flex-1 space-y-3">
        {tasks.length === 0 && (
          <p className="text-gray-400 text-sm text-center mt-10">
            No tasks
          </p>
        )}

        {tasks.map((task) => (
          <SortableTaskCard
            key={task.id}
            task={task}
            onClick={() => onTaskClick(task)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
