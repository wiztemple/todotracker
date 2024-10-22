import { useState } from "react";
import "./App.css";
import { Task } from "./types";
import { Checkbox } from "./components/Checkbox";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Training at the Gym", completed: true },
    { id: 2, title: "Play Paddle with friends", completed: false },
    { id: 3, title: "Burger BBQ with family", completed: false },
  ]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const handleAddTask = (): void => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: newTaskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  };

  const handleDeleteTask = (): void => {
    if (editingTask) {
      setTasks(tasks.filter((task) => task.id !== editingTask.id));
      setEditingTask(null);
      setNewTaskTitle("");
    }
  };

  const handleEditTask = (task: Task): void => {
    setEditingTask(task);
    setNewTaskTitle(task.title);
  };

  const handleSaveTask = (): void => {
    if (newTaskTitle.trim()) {
      if (editingTask) {
        setTasks(
          tasks.map((task) =>
            task.id === editingTask.id ? { ...task, title: newTaskTitle } : task
          )
        );
        setEditingTask(null);
      } else {
        handleAddTask();
      }
      setNewTaskTitle("");
    }
  };

  const handleToggleComplete = (taskId: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-layout">
      <div className="app">
        <div className="sidebar">
          <div className="profile-header">
            <img src="./profileimage.png" alt="profile image" />
            <div className="details">
              <span>Hello, John</span>
              <p>
                What are your plans <br /> for today?
              </p>
            </div>
          </div>
          <div className="upgrade">
            <img src="./trophy.png" alt="profile image" />
            <span className="upgrade-text">Go Pro Upgrade Now</span>
            <span className="upgrade-price">$1</span>
          </div>
          <div className="tasks-wrapper">
            <ul className="tasks">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className={`task ${task.completed ? "completed" : ""}`}
                >
                  <Checkbox
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                  />
                  <span
                    className="task-title"
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task.title}
                  </span>
                  <button type="button" onClick={() => handleEditTask(task)}>
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewTaskTitle(e.target.value)
                }
                placeholder="Enter task title"
              />
            </div>
          </div>
          <div className="task-actions">
            <button
              type="button"
              className="delete-btn"
              onClick={handleDeleteTask}
            >
              <span className="delete-btn-text">Delete</span>
            </button>
            <button type="button" className="save-btn" onClick={handleSaveTask}>
              <span className="save-btn-text">
                {editingTask ? "Save Changes" : "Add Task"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
