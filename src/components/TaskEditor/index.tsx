import { Task } from "../../types";
import Button from "../Button";

const TaskEditor = ({
  editingTask,
  newTaskTitle,
  onTitleChange,
  onDelete,
  onSave,
}: {
  editingTask: Task | null;
  newTaskTitle: string;
  onTitleChange: (value: string) => void;
  onDelete: () => void;
  onSave: () => void;
}) => (
  <div className="taskpane">
    <div className="taskpane-header">
      <h1>{editingTask ? "Edit Task" : "Add New Task"}</h1>
    </div>
    <div className="task-editor">
      <div className="task-field">
        <label>Task Name</label>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Enter task title"
        />
      </div>
    </div>
    <div className="task-actions">
      <Button onClick={onDelete} className="delete-btn">
        Delete
      </Button>
      <Button onClick={onSave} className="save-btn">
        {editingTask ? "Save" : "Add Task"}
      </Button>
    </div>
  </div>
);

export default TaskEditor;
