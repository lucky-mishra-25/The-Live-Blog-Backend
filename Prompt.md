# 🧠 Project Prompt: Live Blog Backend

## 📌 Theme
NoSQL Databases, Cloud Storage, and Object Data Modeling

---

## 🎯 Objective

Build a backend API for a live blog application using Node.js, Express, and MongoDB Atlas. The goal is to replace temporary in-memory storage with a persistent cloud database.

---

## 🟢 Level 1 Requirements

- Create a MongoDB Atlas cluster
- Connect backend using Mongoose
- Define a Post schema with:
  - title (String)
  - content (String)
  - createdAt (Date)

---

## 🔵 Level 2 Requirements

Extend Level 1 by implementing full CRUD functionality:

- Create posts using `POST /posts`
- Fetch posts using `GET /posts`
- Delete posts using `DELETE /posts/:id`
- Replace mock data with real database queries

---

## ⚙️ Functional Requirements

- RESTful API structure
- JSON request/response handling
- Error handling using try-catch
- Use environment variables for configuration

---

## 🧪 Testing

- Use Postman to test all endpoints
- Verify data is stored in MongoDB Atlas
- Confirm delete and update operations work correctly

---

## 🧠 Learning Outcomes

- Understanding NoSQL databases
- Using MongoDB Atlas (cloud database)
- Mongoose schema and models
- REST API development with Express
- CRUD operations

---

## 🚀 Bonus Features

- Add update route (`PUT /posts/:id`)
- Sort posts by latest
- Add validation to schema

---

## 🏁 Expected Outcome

A fully functional backend that:
- Stores blog posts in MongoDB
- Supports full CRUD operations
- Is ready for frontend integration