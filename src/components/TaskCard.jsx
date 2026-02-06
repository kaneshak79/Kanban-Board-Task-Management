
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

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-gray-50 p-4 rounded-lg shadow border cursor-pointer"
      onClick={() => onTaskClick(task)}
    >
     
      <div
//   ref={setNodeRef}
  {...attributes}
  {...listeners}
  className="bg-white p-4 rounded-lg shadow cursor-grab"
>


      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>

      <div className="mt-2 text-xs bg-purple-100 text-purple-600 px-2 py-1 inline-block rounded">
        {task.priority}
      </div>
    </div>
    </div>
  );
};

export default TaskCard;

