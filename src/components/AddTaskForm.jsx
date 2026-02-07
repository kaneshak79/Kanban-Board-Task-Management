


import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

const AddTaskForm = ({ onClose }) => {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      id: uuidv4(),
      title,
      description,
      status,
      priority,
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
    });

    // reset
    setTitle("");
    setDescription("");
    setTags("");
    setPriority("Medium");
    setStatus("To Do");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* ✅ Dark + Blur Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl p-6 w-[90%] max-w-md shadow-2xl">
        <h2 className="text-xl font-bold mb-4">Add Task</h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            placeholder="Task title"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Task description"
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            placeholder="Tags (ui, bug, urgent)"
            className="w-full border p-2 rounded"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          {/* Category */}
          <label className="text-sm font-medium">Category</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>

          {/* Priority */}
          <label className="text-sm font-medium">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;

