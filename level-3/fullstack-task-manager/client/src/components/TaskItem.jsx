function TaskItem({ task, onUpdateTask, onDeleteTask }) {
  const handleComplete = () => {
    onUpdateTask(task._id, {
      completed: !task.completed
    });
  };

  const handleEdit = () => {
    const updatedTitle = prompt("Edit task title:", task.title);

    if (updatedTitle === null) {
      return;
    }

    if (!updatedTitle.trim()) {
      alert("Task title cannot be empty.");
      return;
    }

    onUpdateTask(task._id, {
      title: updatedTitle.trim()
    });
  };

  return (
    <div className="task-item">
      <div>
        <h3 className={task.completed ? "completed" : ""}>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
      </div>

      <div className="task-actions">
        <button onClick={handleComplete} className="complete-btn">
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={handleEdit} className="edit-btn">
          Edit
        </button>

        <button onClick={() => onDeleteTask(task._id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;