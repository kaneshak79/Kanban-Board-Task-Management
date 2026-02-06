
import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Column from "../components/Column";
import TaskModal from "../components/TaskModal";
import Navbar from "../components/Navbar";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";

const columns = [
  { id: "todo", title: "To Do" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" },
];

const Home = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [selectedTask, setSelectedTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    if (columns.some((col) => col.id === over.id)) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === active.id ? { ...task, status: over.id } : task
        )
      );
    }
  };

  
  const handleUpdateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setSelectedTask(null);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
    setSelectedTask(null);
  };

  return (
    <>
     
  {!selectedTask && <Navbar />}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-100 min-h-screen">
          {columns.map((col) => (
            <Column
              key={col.id}
              title={col.title}
              columnId={col.id}
              tasks={tasks.filter((task) => task.status === col.id)}
              onTaskClick={setSelectedTask}
            />
          ))}
        </div>
      </DndContext>

      
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSave={handleUpdateTask}
          onDelete={handleDeleteTask}
        />
      )}
    </>
  );
};

export default Home;
