# Employee-Management-Software

### GitHub repo link: https://github.com/ratSparrow/Employee-Management-Api

## Prerequisites
## Api Endpoints and Routes

Before getting started, ensure you have the following:

- Node.js (version x.x.x)
- MongoDB (or another supported database)
- npm (Node Package Manager)


## Technology Stack

The Employee-Management-Software Backend is built using the following technologies:

- **Node.js**: JavaScript runtime environment for server-side development.
- **Express.js**: Web application framework for building APIs and handling routes.
- **MongoDB**: NoSQL database for storing university data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB integration.
- **JSON Web Tokens (JWT)**: For authentication and authorization.
- **Bcrypt**: Library for hashing passwords.
- **dotenv**: For managing environment variables.
- **... (add any other technologies you're using)**


## API Endpoints
### Employee
- http://localhost:4000/api/v1/employee [create employee] (POST)
- http://localhost:4000/api/v1/employee [get all employee] (GET)
- http://localhost:4000/api/v1/employee/65200deb815549cee5d05da4 [get Single Employee] (GET)
- http://localhost:4000/api/v1/employee/65200deb815549cee5d05da4 [Update Single Employee] (PATCH)
- http://localhost:4000/api/v1/employee/65200deb815549cee5d05da4 [Delete Single Employee] (DELETE)

### Sample Employee Add JSON type
```
    {
        "firstName": "Rafiul Alam",
        "lastName": "Tonmoy",
        "email": "mrafiul.alam7@gmail.com",
        "date": "24-01-2025",
        "salary": "10000",
        "status": true
    }

```
