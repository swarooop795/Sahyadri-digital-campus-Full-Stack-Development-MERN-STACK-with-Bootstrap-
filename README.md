# Sahyadri digital canteen(Full Stack Development (MERN STACK with Bootstrap))

# 🏷️ Project Name: Sahyadri Digital Canteen
This is a full-stack college canteen management web application built using:

Frontend: React + TypeScript + Tailwind CSS

Backend: Node.js + Express + MongoDB

Build Tools: Vite

# 🎯 Main Purpose
To provide a digital platform for managing food orders in a college canteen. It helps:

Students to place food orders (in real case)

Admin to manage those orders and view feedback

# ✅ Main Features
# 1. 🔐 Admin Login
Only the admin can log in.

Credentials are checked against the MongoDB database.

Default admin:

Username: admin

Password: admin123

# 2. 📋 View Orders
Admin can see all orders submitted by users.

Orders include:

Customer Name

List of items with quantity and price

Order status (e.g., "Pending")

# 3. 🗑️ Delete Orders
Admin can delete individual orders.

Useful for removing old or completed orders.

# 4. 💬 View Feedback
Admin can view feedback submitted by users.

Feedback includes:

Customer name

Rating

Comment

# 5. 🧪 Sample Data
When the server starts for the first time:

A default admin is created if not already present.

Sample orders and feedback are inserted.

e.g., order from "Alice" for "Idli"

Feedback from students with ratings and comments

# 🏗️ Architecture
🔧 Backend
Built with Node.js + Express

Uses MongoDB and Mongoose for database and schemas

API routes in /routes/adminRoutes.js:

/api/login: for admin authentication

/api/orders: GET and DELETE

/api/feedbacks: GET

Backend folder:
/models/ → defines schemas for Admin, Order, and Feedback

sever.js → main server file (runs Express app)

# 🌐 Frontend
Built with React and Vite

Uses TypeScript and Tailwind CSS for modern UI and type safety

Frontend folders:
/src/pages/: Login page, Order list page, Feedback page

/src/components/: reusable UI components (like buttons, tables)

/src/SampleData.tsx: used for displaying dummy data (if needed)

/src/context/: likely handles global state (e.g., auth)

# 🔁 Workflow
Admin visits login page → submits credentials.

On successful login, admin is redirected to dashboard.

Dashboard shows two main sections:

Orders (with delete option)

Feedback from users

Admin can delete orders when they are completed.

Feedback is shown in list form with ratings and comments.

# 📌 Final Summary
This project is:

A working college canteen management system

Good for learning full-stack development (MERN-style)

Well-structured and organized
