
import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useDroppable } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import TaskCard from "./TaskCard";

const Column = ({ title, columnId, tasks, onTaskClick }) => {
  const { setTasks } = useContext(TaskContext);

  const { setNodeRef } = useDroppable({
    id: columnId,
  });

  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddTask = () => {
    if (!taskTitle.trim()) return;

    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      description,
      status: columnId, 
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
      priority,
    };

    setTasks((prev) => [...prev, newTask]);

    
    setTaskTitle("");
    setDescription("");
    setTags("");
    setPriority("Medium");
  };

  return (
    <div
      ref={setNodeRef}
      className="bg-white p-4 rounded-xl shadow-md min-h-[500px]"
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      
      <input
        type="text"
        placeholder="Task title"
        className="w-full border p-2 rounded mb-2"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <textarea
        placeholder="Task description"
        className="w-full border p-2 rounded mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        className="w-full border p-2 rounded mb-2"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <div className="mb-2">
        <label className="block mb-1 text-sm font-medium">
          Priority
        </label>
        <select
          className="w-full border p-2 rounded"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <button
        onClick={handleAddTask}
        className="bg-pink-500 text-white px-4 py-2 rounded mb-4 hover:bg-pink-600"
      >
        Add Task
      </button>

     
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onTaskClick={onTaskClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;

