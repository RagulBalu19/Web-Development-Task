# 📘 Book API – Node.js Express REST API


## 📂 Project Structure
```
book-api/
│── src/
│   ├── controllers/
│   │   └── bookController.js
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── app.js
│── .env
│── package.json
│── server.js
```

---

## 🚀 Features
- Complete CRUD operations  
- MongoDB + Mongoose integration  
- Organized MVC structure  
- Environment variable support  
- Clean API responses  

---

## 🛠️ Installation

### 1️⃣ Clone the repository
```
cd book-api
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Setup environment variables
Create a `.env` file:
```
MONGO_URI=mongodb://localhost:27017/booksdb
PORT=3000
```

### 4️⃣ Run the server
```
npm start
```

---

## 📘 API Endpoints

### ➕ Add a Book  
**POST** `/api/books`  
```json
{
  "title": "Book Name",
  "author": "Author Name",
  "year": 2024
}
```

### 📄 Get All Books  
**GET** `/api/books`

### 🔍 Get Book by ID  
**GET** `/api/books/:id`

### ✏️ Update Book  
**PUT** `/api/books/:id`

### ❌ Delete Book  
**DELETE** `/api/books/:id`

---

## 🧪 Testing With Postman
1. Open Postman → Create Collection  
2. Add the above API routes  
3. For POST/PUT → Select **Body → raw → JSON**  
4. Click *Send* and view results  

---

## 📜 License
This project is released under the **MIT License**.
