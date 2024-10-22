import { Task } from "../../types";
import Button from "../Button";
import { Checkbox } from "../Checkbox";
import "./TaskItem.css";

const TaskItem = ({
  task,
  onToggle,
  onEdit,
}: {
  task: Task;
  onToggle: (id: number) => void;
  onEdit: (task: Task) => void;
}) => (
  <li className={`task ${task.completed ? "completed" : ""}`}>
    <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
    <span
      className="task-title"
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      {task.title}
    </span>
    <Button onClick={() => onEdit(task)} className="edit-btn">
      Edit
    </Button>
  </li>
);

export default TaskItem;
