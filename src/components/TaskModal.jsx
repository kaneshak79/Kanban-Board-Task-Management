

import { useState } from "react";

export default function TaskModal({ task, onClose, onSave, onDelete }) {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  if (!task) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.35),transparent_40%),linear-gradient(to_bottom,rgba(15,23,42,0.6),rgba(2,6,23,0.85))] backdrop-blur-2xl">
    
      <div className="bg-white w-[600px] rounded-2xl shadow-2xl overflow-hidden">
      
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-purple-700">
            Task Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

     
        <div className="p-6 space-y-4">
          
        
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={editedTask.title}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          
          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="description"
              value={editedTask.description}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

       
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Status</label>
              <select
                name="status"
                value={editedTask.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm mb-1">Priority</label>
              <select
                name="priority"
                value={editedTask.priority}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

         
          <div>
            <label className="block text-sm mb-1">Tags</label>
            <input
              type="text"
              name="tags"
              value={editedTask.tags}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Enter tags separated by comma"
            />
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4 border-t">
          <button
            onClick={() => onDelete(task.id)}
            className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


