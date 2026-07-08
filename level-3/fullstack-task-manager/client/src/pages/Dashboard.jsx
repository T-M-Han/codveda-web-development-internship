import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks");
      setTasks(response.data.tasks);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to load tasks."
      );
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await API.post("/tasks", taskData);
      setTasks([response.data.task, ...tasks]);
      setMessage("");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to add task."
      );
    }
  };

  const updateTask = async (taskId, updatedData) => {
    try {
      const response = await API.put(`/tasks/${taskId}`, updatedData);

      setTasks(
        tasks.map((task) =>
          task._id === taskId ? response.data.task : task
        )
      );

      setMessage("");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to update task."
      );
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await API.delete(`/tasks/${taskId}`);

      setTasks(tasks.filter((task) => task._id !== taskId));
      setMessage("");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to delete task."
      );
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="dashboard-page">
      <Navbar />

      <section className="dashboard-header">
        <p className="app-label">Level 3 Project</p>
        <h1>Full-Stack Task Manager</h1>
        <p>
          A CRUD task management application with user authentication,
          protected routes, and MongoDB database storage.
        </p>
      </section>

      {message && <p className="error-message">{message}</p>}

      <TaskForm onAddTask={addTask} />

      <section className="tasks-section">
        <h2>Your Tasks</h2>

        {loading ? (
          <p className="empty-message">Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onUpdateTask={updateTask}
            onDeleteTask={deleteTask}
          />
        )}
      </section>
    </main>
  );
}

export default Dashboard;