
import { useDraggable } from "@dnd-kit/core";

const TaskCard = ({ task, onTaskClick }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  //FIX: Normalize tags
  let tagsArray = [];

  if (Array.isArray(task.tags)) {
    tagsArray = task.tags;
  } else if (typeof task.tags === "string" && task.tags.trim() !== "") {
    tagsArray = task.tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t !== "");
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-gray-50 p-4 rounded-lg shadow border cursor-pointer"
      onClick={() => onTaskClick(task)}
    >
      <div
        {...attributes}
        {...listeners}
        className="bg-white p-4 rounded-lg shadow cursor-grab"
      >
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>

        {/*  TAGS */}
        <div className="flex flex-wrap gap-1 mt-2">
          {tagsArray.length > 0 ? (
            tagsArray.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-400">No tags</span>
          )}
        </div>

        {/* PRIORITY */}
        <div className="mt-2 text-xs bg-purple-100 text-purple-600 px-2 py-1 inline-block rounded">
          {task.priority}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
