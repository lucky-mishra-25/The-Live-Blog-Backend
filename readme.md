# 📝 Live Blog Backend

A RESTful backend API for a live blog application built using **Node.js, Express, and MongoDB Atlas**. This project demonstrates full CRUD operations using a cloud-hosted NoSQL database.

---

## 🚀 Features

* Create blog posts
* Fetch all posts
* Update posts
* Delete posts
* Cloud database using MongoDB Atlas
* Mongoose for object data modeling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* CORS

---

## 📁 Project Structure

```
live-blog-backend/
│── models/
│   └── Post.js
│── server.js
│── .env
│── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone <your-repo-link>
cd live-blog-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 4. Run the Server

```
node server.js
```

Server will run at:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### ➕ Create Post

```
POST /posts
```

Body:

```
{
  "title": "My Blog",
  "content": "This is my post"
}
```

---

### 📥 Get All Posts

```
GET /posts
```

---

### ✏️ Update Post

```
PUT /posts/:id
```

---

### ❌ Delete Post

```
DELETE /posts/:id
```

---

## 🧪 Testing

Use Postman or Thunder Client to test all API endpoints.

---

## 🎯 Project Level

* Level 2 (Intermediate)
* Full CRUD operations using MongoDB Atlas

---

## 🧠 Learning Outcomes

* Understanding NoSQL databases
* Working with MongoDB Atlas
* Using Mongoose (Schema & Models)
* Building REST APIs with Express
* Implementing CRUD operations

---

## 🚀 Future Improvements

* Authentication (JWT)
* Pagination
* Search functionality
* Deployment (Render / Railway)

---

## 👨‍💻 Author

Lucky Mishra
