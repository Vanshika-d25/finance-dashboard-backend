# Finance Dashboard Backend

A scalable backend system for managing financial records with role-based access control, analytics, and secure APIs.

---

## Features

- User and Role Management (Admin, Analyst, Viewer)
- Financial Records CRUD (Create, Read, Update, Delete)
- Record Filtering (by date, category, type)
- Dashboard Summary APIs (totals, trends)
- Role-Based Access Control (RBAC)
- Input Validation and Error Handling
- Data Persistence using MongoDB

---

## Tech Stack

- Backend: Node.js, Express.js  
- Database: MongoDB (Mongoose ODM)  
- Authentication: JWT (JSON Web Tokens)  
- Deployment: Render  

---

## Project Structure

src/
 ├── config/
 ├── middlewares/
 ├── modules/
 │    ├── auth/
 │    ├── users/
 │    ├── transaction/
 │    ├── summary/
 ├── app.js
 ├── server.js

---

##  Demo Credentials (Seeded Users)

The application includes pre-seeded users for testing:

Role    | Email              | Password
--------|-------------------|----------
Admin   | admin@test.com     | 123456  
Analyst | analyst@test.com   | 123456  
Viewer  | viewer@test.com    | 123456  

Note: These users are automatically created when the server starts.

---

## Authentication

POST /auth/login

Request:
{
  "email": "admin@test.com",
  "password": "123456"
}

Use the returned token:
Authorization: Bearer <your_token>

---

## API Endpoints

### Transactions

POST    /transactions        (Admin only)  
GET     /transactions        (All roles)  
PATCH   /transactions/:id    (Admin only)  
DELETE  /transactions/:id    (Admin only)  

---

### Summary APIs

GET /summary              (Admin, Analyst)  
GET /summary/category     (Admin, Analyst)  
GET /summary/trends       (Admin, Analyst)  

---

### Users

POST    /users            (Admin)  
GET     /users            (Admin)  
PATCH   /users/:id        (Admin)  
DELETE  /users/:id        (Admin)  

---

## Filtering & Pagination

GET /transactions?type=income&category=Salary&page=1&limit=5

Date filtering:
GET /transactions?startDate=2026-01-01&endDate=2026-12-31

---


##  Limitations & Future Improvements

- Add recent activity API  
- Add weekly trends  
- Improve date validation and timezone handling  
- Implement token invalidation (logout)  
- Add Swagger API documentation  
- Add centralized error handling and logging  

---

##  Technical Highlights

- Modular architecture (Controller-Service-Model pattern)
- MongoDB aggregation for analytics
- Middleware-based RBAC implementation
- Scalable and extensible design

---

##  Deployment

Backend is deployed on Render.

---

##  Author

Vanshika Dixit
