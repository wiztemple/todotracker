import { useState } from "react";
import "./App.css";
import { Task } from "./types";
import Sidebar from "./components/Sidebar";
import TaskEditor from "./components/TaskEditor";
import { INITIAL_TASKS } from "./data";

function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
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
        <Sidebar
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onEditTask={handleEditTask}
          onSaveTask={handleSaveTask}
        />
        <TaskEditor
          editingTask={editingTask}
          newTaskTitle={newTaskTitle}
          onTitleChange={setNewTaskTitle}
          onDelete={handleDeleteTask}
          onSave={handleSaveTask}
        />
      </div>
    </div>
  );
}

export default App;
