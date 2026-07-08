import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim()) {
      setMessage("Task title is required.");
      return;
    }

    onAddTask(formData);

    setFormData({
      title: "",
      description: ""
    });

    setMessage("");
  };

  return (
    <section className="task-form-card">
      <h2>Add New Task</h2>

      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Task description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Add Task</button>
      </form>

      {message && <p className="error-message">{message}</p>}
    </section>
  );
}

export default TaskForm;