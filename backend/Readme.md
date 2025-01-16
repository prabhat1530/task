# To-Do Reminder App

## Description
A RESTful To-Do reminder application built with Node.js, Express, and MongoDB.

## Features
- Create, Read, Update, and Delete To-Do tasks
- Delete all tasks
- Modularized structure with API best practices

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```bash
   MONGODB_URL=mongodb+srv://prabhat:pra123@cluster0.cqcsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   PORT=3000
   ```
4. Start the server:
   ```bash
   node App
   ```

## API Endpoints
- `POST /api/todo` - Create a new task
- `GET /api/todo` - Get all tasks
- `GET /api/todo/:id` - Get a task by ID
- `PATCH /api/todo/:id` - Update a task
- `DELETE /api/todo/:id` - Delete a task by ID
- `DELETE /api/todo` - Delete all tasks

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
