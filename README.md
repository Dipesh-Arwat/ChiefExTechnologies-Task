MEAN Stack Business Transactions App 🚀
A high-performance MEAN Stack application that allows users to search, filter, and paginate business transactions efficiently with 10K+ records. This project is optimized for fast searches, minimum backend load, and scalable pagination.

🔹 Features
✔ Optimized Search Algorithm (MongoDB Indexing)
✔ Fast & Efficient Pagination (Cursor-based)
✔ Date Range Filtering
✔ Responsive UI (Angular + Bootstrap)
✔ RESTful APIs (Node.js + Express)
✔ MongoDB Database for Transactions

📌 Tech Stack
Frontend (Angular)
Angular 17

Angular Material / Bootstrap

HTTP Client for API requests

RxJS for handling async data

Backend (Node.js + Express)
Express.js

Mongoose (MongoDB ODM)

Dotenv (Environment variables)

CORS (Cross-Origin Resource Sharing)

Database (MongoDB)
MongoDB with indexing for fast searches

Stores transactionId, amount, date, and type

📂 Project Structure
bash
Copy
Edit
mean-search-app/
│── backend/                   # Backend code (Node.js + Express)
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # Express routes
│   ├── server.js               # Main Express server
│   ├── .env                    # Environment variables
│
│── frontend/                   # Frontend code (Angular)
│   ├── src/app/                # Angular components & services
│   ├── src/app/services/       # Transaction API services
│   ├── src/app/components/     # Transaction UI component
│   ├── src/app/app.module.ts   # Angular module
│   ├── src/app/app-routing.ts  # Angular routing
│
└── README.md                   # Project Documentation
🚀 How to Run the Project
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/mean-search-app.git
cd mean-search-app
📌 Backend Setup (Node.js + Express)
2️⃣ Install Dependencies
bash
Copy
Edit
cd backend
npm install
3️⃣ Setup MongoDB
Make sure MongoDB is installed and running locally or use a cloud DB (MongoDB Atlas).

Create a .env file and add:

bash
Copy
Edit
MONGO_URI=mongodb://localhost:27017/businessDB
4️⃣ Start the Backend Server
bash
Copy
Edit
node server.js
📌 Server will run on http://localhost:5000

🎨 Frontend Setup (Angular)
5️⃣ Install Angular Dependencies
bash
Copy
Edit
cd frontend
npm install
6️⃣ Start Angular App
bash
Copy
Edit
ng serve --open
📌 The app will open in http://localhost:4200

🛠 API Endpoints
1️⃣ Add Transaction (For Testing)
POST /api/transactions/add
📌 Body (JSON)

json
Copy
Edit
{
  "transactionId": "TXN12345",
  "amount": 5000,
  "date": "2024-03-25T10:00:00.000Z",
  "type": "credit"
}
2️⃣ Search Transactions (With Pagination)
GET /api/transactions/search?query=TXN&page=1&limit=10

3️⃣ Filter Transactions by Date
GET /api/transactions/filter?startDate=2024-01-01&endDate=2024-12-31

🖥 UI Preview (Angular)
✔ Search by Transaction ID
✔ Date Range Filter
✔ Pagination with Next & Previous

💡 Future Improvements
🔹 Sorting (By Amount, Date, etc.)
🔹 Export Transactions (CSV, Excel)
🔹 Authentication & User Roles
