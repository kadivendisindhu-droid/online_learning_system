# Online Learning Platform

A starter full-stack case study using React JS, Spring MVC (Spring Boot), and MySQL.

## Features
- Course catalog with search and category filters
- Course detail and enrollment flow
- Demo login/register interface (backend authentication endpoints included as a starter)
- Learner dashboard with enrollment progress
- Quiz page with instant scoring
- REST API using Spring MVC
- MySQL persistence through Spring Data JPA

## Requirements
- Node.js 18+
- Java 17+
- Maven 3.9+
- MySQL 8+

## 1. Configure MySQL
Create a database:
```sql
CREATE DATABASE learning_platform;
```
Update `backend/src/main/resources/application.properties` with your MySQL username/password.

## 2. Run the backend
From the `backend` folder:
```bash
mvn spring-boot:run
```
API runs at `http://localhost:8080`.

## 3. Run the frontend
From the `frontend` folder:
```bash
npm install
npm run dev
```
Open the Vite URL shown in the terminal (usually `http://localhost:5173`).

## API endpoints
- `GET /api/courses` — list courses
- `GET /api/courses/{id}` — course details
- `POST /api/enrollments` — enroll a learner
- `GET /api/enrollments?userId=1` — list enrollments for a user
- `POST /api/auth/register` — create a user
- `POST /api/auth/login` — demo login check
- `GET /api/health` — health check

## Important
This is an educational starter, not production-ready authentication. Password hashing, validation, authorization, rate limiting, CSRF/security configuration, and robust error handling should be added before real deployment. The frontend currently uses a demo user ID for enrollment so the case study can be run without a full authentication flow.
