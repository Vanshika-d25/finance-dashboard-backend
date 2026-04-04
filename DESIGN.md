*Project Overview*
This project is a Finance Dashboard Backend built using Node.js, Express, and MongoDB.

It allows users to manage financial transactions (income and expenses), view summaries, and analyze trends. The system includes authentication and role-based access control to ensure secure and controlled access.


*Architecture*
The project follows a modular architecture with separation of concerns:

- Routes → Handle API endpoints
- Controllers → Handle request/response logic
- Services → Contain business logic
- Models → Define database schema
- Middleware → Handle authentication and authorization


*Folder Structure*
src/
 ├── modules/
 │    ├── users/
 │    ├── transactions/
 │    ├── summary/
 │    └── auth/
 ├── middlewares/
 ├── config/
 └── server.js

*Database Design*
`Users Collection`
- name
- email
- password (hashed)
- role (admin, analyst, viewer)
- status

`Transactions Collection`
- amount
- type (income/expense)
- category
- date
- notes
- createdBy (reference to user)

*Authentication & Authorisation*
JWT-based authentication is implemented.

- Users login and receive a token
- Token is sent in Authorization header
- Middleware verifies token
- Role-based access control restricts endpoints

*API*
User APIs:
POST /users
GET /users
PATCH /users/:id
DELETE /users/:id

Auth APIs:
POST /auth/login

Transaction APIs:
POST /transactions
GET /transactions (with filtering + pagination)

Summary APIs:
GET /summary
GET /summary/category
GET /summary/trends

*Features Implemented*
- CRUD operations
- Filtering and pagination
- Aggregation using MongoDB
- JWT authentication
- Role-based access control

*Deployment*
The backend is deployed using Render and connected to MongoDB Atlas.