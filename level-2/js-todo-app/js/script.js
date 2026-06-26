const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");
const emptyMessage = document.getElementById("emptyMessage");

const totalTasks = document.getElementById("totalTasks");
const activeTasks = document.getElementById("activeTasks");
const completedTasks = document.getElementById("completedTasks");

const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateSummary() {
  totalTasks.textContent = tasks.length;
  activeTasks.textContent = tasks.filter((task) => !task.completed).length;
  completedTasks.textContent = tasks.filter((task) => task.completed).length;
}

function getFilteredTasks() {
  if (currentFilter === "active") {
    return tasks.filter((task) => !task.completed);
  }

  if (currentFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = getFilteredTasks();

  if (filteredTasks.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }

  filteredTasks.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    taskItem.innerHTML = `
      <div class="task-left">
        <input 
          type="checkbox" 
          class="task-checkbox" 
          ${task.completed ? "checked" : ""}
        />

        <span class="task-text ${task.completed ? "completed" : ""}">
          ${task.text}
        </span>
      </div>

      <div class="task-actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    const checkbox = taskItem.querySelector(".task-checkbox");
    const editBtn = taskItem.querySelector(".edit-btn");
    const deleteBtn = taskItem.querySelector(".delete-btn");

    checkbox.addEventListener("change", () => {
      toggleTask(task.id);
    });

    editBtn.addEventListener("click", () => {
      editTask(task.id);
    });

    deleteBtn.addEventListener("click", () => {
      deleteTask(task.id);
    });

    taskList.appendChild(taskItem);
  });

  updateSummary();
}

function addTask(text) {
  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed
      };
    }

    return task;
  });

  saveTasks();
  renderTasks();
}

function editTask(id) {
  const taskToEdit = tasks.find((task) => task.id === id);
  const updatedText = prompt("Edit your task:", taskToEdit.text);

  if (updatedText === null) {
    return;
  }

  if (updatedText.trim() === "") {
    alert("Task cannot be empty.");
    return;
  }

  tasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        text: updatedText.trim()
      };
    }

    return task;
  });

  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);

  saveTasks();
  renderTasks();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    errorMessage.textContent = "Please enter a task.";
    return;
  }

  errorMessage.textContent = "";
  addTask(taskText);
  taskInput.value = "";
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
    currentFilter = button.dataset.filter;

    renderTasks();
  });
});

renderTasks();