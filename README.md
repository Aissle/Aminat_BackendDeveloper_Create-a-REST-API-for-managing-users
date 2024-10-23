# Aminat_BackendDeveloper_Create-a-REST-API-for-managing-users
# User Management REST API

A simple REST API for managing users with JWT authentication and role-based authorization. 
Includes:
functionality for registering users, logging in, and protecting routes based on user roles (Admin, User).

## Features
- **User CRUD**: Create, Read, Update, Delete operations for users.
- **JWT Authentication**: Secure the API with JSON Web Tokens.
- **Role-based Authorization**: Admin-only routes for managing users.
- **Pagination**: Fetch users with pagination.

## Prerequisites
Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (MongoDB Atlas for a cloud-based database or MongoDB Compass locally)

## Setup Instructions

### 1. Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

### 2. Install Dependencies
install the required packages, including:
express for server setup
jsonwebtoken for JWT token handling
bcryptjs for password hashing
mongoose for MongoDB object modeling

### 3. run the server
run "npm start" on terminal

### /register:
post request should incude the users name, email and password
{
    "name": "Aminat",
    "email": "user@example.com",
    "password": "ypurPassword123"
}

### /login :
post request should include at least users email and password

### fetching(get), update(put), and delete(delet) requests require a token from an admin user.
to register admin user, include ' "role": "Admin" ' to user data during registration

### update(put), and delete(delet) require the users ID.


app.js - main file
routes folder - contains all routes
models folder - contains userSchema
Aminat_BackendDeveloper_Create-a-REST-API-for-managing-users - Postman collection for testing the API.postman collection