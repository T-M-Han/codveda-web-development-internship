# Level 3 — Full-Stack Task Manager

## Internship Task

This project was created for the Codveda Web Development Internship.

### Completed Tasks

* Level 3 Task 1: Build a Full-Stack CRUD Application
* Level 3 Task 2: User Authentication System

## Project Overview

This is a full-stack task manager application built with React, Node.js, Express, MongoDB, and JWT authentication.

The application allows users to register, log in, and manage their own tasks. Each user can create, view, update, complete, and delete tasks. The backend uses protected routes so only authenticated users can access their task data.

## Features

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
* Responsive user interface

## Technologies Used

### Frontend

* React
* React Router DOM
* Axios
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* cors

## Folder Structure

```txt
fullstack-task-manager/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── screenshots/
└── README.md
```

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

## How to Run Locally

### 1. Backend

Go to the server folder:

```bash
cd level-3/fullstack-task-manager/server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

### 2. Frontend

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

## Project Status

Completed.

## Notes

This project was created for internship learning purposes. It demonstrates full-stack CRUD functionality, user authentication, protected routes, and database integration.
