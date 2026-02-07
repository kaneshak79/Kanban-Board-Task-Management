


import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Navbar = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm border-b">
        {/* Logo / Title */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-slate-800">
            Kanban Board
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
          >
            + Add Task
          </button>
        </div>
      </nav>

      {/* Add Task Modal */}
      {showAddModal && (
        <AddTaskForm onClose={() => setShowAddModal(false)} />
      )}
    </>
  );
};

export default Navbar;
