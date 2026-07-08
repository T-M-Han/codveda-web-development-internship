# Codveda Web Development Internship

## Intern

Thaw Myo Han

## Position

Web Development Intern

## Internship Duration

22/06/2026 – 22/07/2026

## Overview

This repository contains the completed projects for the Codveda Web Development Internship.

The internship tasks were divided into three levels:

* Level 1: Basic Web Development
* Level 2: Intermediate Web Development
* Level 3: Advanced Web Development

Each level includes practical web development projects covering HTML, CSS, JavaScript, responsive design, local storage, React, Node.js, Express, MongoDB, CRUD functionality, and user authentication.

## Completed Tasks

| Level   | Task                                                | Project                 | Status    |
| ------- | --------------------------------------------------- | ----------------------- | --------- |
| Level 1 | Task 2: Create a Portfolio Webpage                  | Portfolio Webpage       | Completed |
| Level 1 | Task 3: Introduction to JavaScript                  | Portfolio Interactivity | Completed |
| Level 2 | Task 1: Responsive Web Design with Flexbox and Grid | TaskMate To-Do App      | Completed |
| Level 2 | Task 2: Build a To-Do List App with JavaScript      | TaskMate To-Do App      | Completed |
| Level 3 | Task 1: Build a Full-Stack CRUD Application         | Full-Stack Task Manager | Completed |
| Level 3 | Task 2: User Authentication System                  | Full-Stack Task Manager | Completed |

## Projects

## Level 1 — Portfolio Webpage

### Project Description

The Level 1 project is a fictional portfolio webpage created for Alex Morgan, a sample front-end developer profile.

This project demonstrates basic web development skills using HTML, CSS, and JavaScript. It includes a clean page layout, responsive design, navigation, project cards, contact form, and JavaScript interactivity.

### Completed Tasks

* Level 1 Task 2: Create a Portfolio Webpage
* Level 1 Task 3: Introduction to JavaScript

### Features

* Responsive single-page portfolio layout
* Navigation bar
* Hero section
* About section
* Skills section
* Projects section
* Contact form
* Mobile menu toggle
* Project details modal
* Contact form validation
* Smooth scrolling
* Responsive design for desktop, tablet, and mobile

### Technologies Used

* HTML5
* CSS3
* JavaScript
* Flexbox
* CSS Grid
* Git
* GitHub

### Folder

```txt
level-1/portfolio-webpage/
```

---

## Level 2 — TaskMate JavaScript To-Do List App

### Project Description

TaskMate is a responsive JavaScript to-do list application. It allows users to add, edit, delete, complete, and filter tasks.

The app also uses browser local storage, which means the tasks stay saved even after refreshing the page.

### Completed Tasks

* Level 2 Task 1: Responsive Web Design with Flexbox and Grid
* Level 2 Task 2: Build a To-Do List App with JavaScript

### Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed
* Filter tasks by:

  * All
  * Active
  * Completed
* Task summary cards

  * Total tasks
  * Active tasks
  * Completed tasks
* Empty task message
* Form validation for empty input
* Local storage support
* Responsive design using Flexbox and CSS Grid
* Mobile-friendly layout

### Technologies Used

* HTML5
* CSS3
* JavaScript
* Flexbox
* CSS Grid
* Local Storage
* Git
* GitHub

### Folder

```txt
level-2/js-todo-app/
```

---

## Level 3 — Full-Stack Task Manager

### Project Description

The Level 3 project is a full-stack task manager application with user authentication and CRUD functionality.

Users can register, log in, and manage their own tasks. The app uses JWT authentication and protected routes so each user can only access their own task data.

### Completed Tasks

* Level 3 Task 1: Build a Full-Stack CRUD Application
* Level 3 Task 2: User Authentication System

### Features

* User registration
* User login
* Password hashing with bcrypt
* JWT authentication
* Protected dashboard route
* Create tasks
* View user-specific tasks
* Update tasks
* Mark tasks as completed
* Delete tasks
* MongoDB database storage
* React frontend
* Express backend API
* Frontend and backend connection using Axios
* Responsive user interface

### Technologies Used

#### Frontend

* React
* React Router DOM
* Axios
* JavaScript
* CSS

#### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* cors

### Folder

```txt
level-3/fullstack-task-manager/
```

---

## API Endpoints

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login existing user |

### Tasks

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| POST   | `/api/tasks`     | Create a task              |
| GET    | `/api/tasks`     | Get logged-in user's tasks |
| PUT    | `/api/tasks/:id` | Update a task              |
| DELETE | `/api/tasks/:id` | Delete a task              |

---

## Full Repository Structure

```txt
codveda-web-development-internship/
├── README.md
├── SUBMISSION-CHECKLIST.md
├── INTERNSHIP-NOTES.md
├── .gitignore
│
├── docs/
│
├── level-1/
│   ├── README.md
│   └── portfolio-webpage/
│       ├── index.html
│       ├── README.md
│       ├── css/
│       │   └── style.css
│       ├── js/
│       │   └── script.js
│       ├── images/
│       └── screenshots/
│
├── level-2/
│   ├── README.md
│   └── js-todo-app/
│       ├── index.html
│       ├── README.md
│       ├── css/
│       │   └── style.css
│       ├── js/
│       │   └── script.js
│       └── screenshots/
│
└── level-3/
    ├── README.md
    └── fullstack-task-manager/
        ├── README.md
        ├── client/
        │   ├── package.json
        │   └── src/
        │       ├── components/
        │       ├── pages/
        │       ├── services/
        │       └── styles/
        │
        ├── server/
        │   ├── package.json
        │   ├── server.js
        │   ├── .env.example
        │   ├── config/
        │   ├── controllers/
        │   ├── middleware/
        │   ├── models/
        │   └── routes/
        │
        └── screenshots/
```

---

## How to Run the Projects

## Level 1 Portfolio Webpage

Open:

```txt
level-1/portfolio-webpage/index.html
```

Recommended method:

Use the Live Server extension in Visual Studio Code.

---

## Level 2 JavaScript To-Do App

Open:

```txt
level-2/js-todo-app/index.html
```

Recommended method:

Use the Live Server extension in Visual Studio Code.

---

## Level 3 Full-Stack Task Manager

### Backend Setup

Go to the server folder:

```bash
cd level-3/fullstack-task-manager/server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

The backend runs on:

```txt
http://localhost:5000
```

### Frontend Setup

Go to the client folder:

```bash
cd level-3/fullstack-task-manager/client
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend runs on:

```txt
http://localhost:5173
```

---

## Main Skills Practised

* HTML structure
* CSS styling
* Responsive web design
* Flexbox
* CSS Grid
* JavaScript DOM manipulation
* JavaScript events
* Local storage
* React components
* React Router
* API requests with Axios
* Node.js backend development
* Express.js routing
* MongoDB database integration
* Mongoose models
* CRUD operations
* User authentication
* Password hashing
* JWT protected routes
* Git and GitHub version control
* Project documentation

---

## Project Status

All selected internship tasks are completed.

## Notes

This repository was created for internship learning and task submission purposes.

Some projects use fictional/sample data. Sensitive files such as `.env` are not included in the repository.
