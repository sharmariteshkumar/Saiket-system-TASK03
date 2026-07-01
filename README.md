# 🚀 Task 3 - Basic REST API

A Basic REST API developed using **Node.js** and **Express.js** as part of my **Full Stack Development Internship at Saiket Systems**.

This project demonstrates the fundamentals of RESTful API development by implementing CRUD (Create, Read, Update, Delete) operations for managing user data.

---

## 📌 Features

- ✅ Get All Users
- ✅ Get User by ID
- ✅ Create New User
- ✅ Update Existing User
- ✅ Delete User
- ✅ JSON Request & Response
- ✅ RESTful API Architecture
- ✅ Postman API Testing

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript (ES6)
- REST API
- Postman

---

## 📂 Project Structure

```text
task3-rest-api/
│
├── controllers/
│   └── userController.js
│
├── routes/
│   └── userRoutes.js
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## 🚀 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| POST | `/users` | Create a new user |
| PUT | `/users/:id` | Update user details |
| DELETE | `/users/:id` | Delete a user |

---

## 📥 Sample Request (POST)

```json
{
  "name": "Ritesh Sharma",
  "email": "ritesh@gmail.com",
  "age": 22
}
```

---

## 📤 Sample Response

```json
{
  "message": "User created successfully",
  "user": {
    "id": 1,
    "name": "Ritesh Sharma",
    "email": "ritesh@gmail.com",
    "age": 22
  }
}
```

---

## ▶️ Installation

### Go to Project Folder

```bash
cd task3-rest-api
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
npm run dev
```

Server will start at:

```text
http://localhost:3000
```

---

## 🧪 API Testing

The API was tested successfully using **Postman**.

---

## 🎯 Learning Outcomes

Through this project, I learned:

- Node.js Basics
- Express.js Framework
- REST API Development
- CRUD Operations
- Route Handling
- Controllers
- JSON Handling
- HTTP Methods (GET, POST, PUT, DELETE)
- Postman API Testing

---

## 🏢 Internship Details

**Company:** Saiket Systems

**Internship Domain:** Full Stack Development

**Task:** Task 3 – Build a Basic REST API

---

## 👨‍💻 Author

**Ritesh Sharma**

Full Stack Development Intern

GitHub: https://github.com/sharmariteshkumar

LinkedIn: https://linkedin.com/in/sharmaritesh19

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
