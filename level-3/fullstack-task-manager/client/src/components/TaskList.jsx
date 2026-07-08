import TaskItem from "./TaskItem";

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks found. Add your first task.</p>;
  }

  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </section>
  );
}

export default TaskList;