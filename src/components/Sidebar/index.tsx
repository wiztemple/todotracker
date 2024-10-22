import { Task } from "../../types";
import Button from "../Button";
import ProfileHeader from "../ProfileHeader";
import TaskItem from "../TaskItem";
import UpgradeSection from "../UpgradeSection.tsx";

const Sidebar = ({
  tasks,
  onToggleComplete,
  onEditTask,
  onSaveTask,
}: {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onEditTask: (task: Task) => void;
  onSaveTask: () => void;
}) => (
  <aside className="sidebar">
    <ProfileHeader />
    <UpgradeSection />
    <div className="tasks-wrapper">
      <ul className="tasks">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggleComplete}
            onEdit={onEditTask}
          />
        ))}
      </ul>
    </div>
    <div className="icon-button">
      <Button onClick={onSaveTask} title="Add Task">
        +
      </Button>
    </div>
  </aside>
);

export default Sidebar;
