# Portfolio Website - Backend

This is the backend service for my personal portfolio website. It provides APIs for managing blog posts, projects and other data and serves as the connection between the frontend and the database.

## 🚀 Project Overview

The backend supports the following features:

- **Blog and other API** – Create, read, update, and delete (CRUD) blog posts and other data
- **Admin Access** – Authenticated routes to manage blog posts securely
- **Database Integration** – Stores blogs, projects and other related data
- **RESTful API** – Built using clean and scalable routes

This backend is connected to the frontend to dynamically display and manage blog content through an admin dashboard.

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT with bcrypt
- **API Testing**: Postman 

---

## 📦 How to Run (Development)

1. Clone the repo

2. Install dependencies:
   ```bash
   npm install

3. Configure .env file

   ```bash
   # .env file
    DATABASE_URL=your_postgresql_database_url
    # add jwt tokens
    # configure cloudinary to upload file

4. Run the development server
 --- 
Thanks