# ProductHub

**ProductHub** is a simple **MERN stack** product management application with **CRUD functionality** and **dark mode support**.

## Features
- View all products
- Create new products
- Update existing products
- Delete products
- Dark mode toggle

## Tech Stack
- **Frontend:** React, React Router, useState, useEffect
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **API Communication:** REST API, Fetch API

## Installation

### 1. Clone the repository
```sh
git clone https://github.com/your-username/ProductHub.git
cd ProductHub
```

### 2. Install dependencies
#### Frontend
```sh
cd client
npm install
```
#### Backend
```sh
cd server
npm install
```

### 3. Start the application
#### Start Backend Server
```sh
cd server
npm start
```
#### Start Frontend
```sh
cd client
npm run dev
```

## API Endpoints
| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| GET    | /api/products       | Fetch all products   |
| POST   | /api/products       | Create a product     |
| PUT    | /api/products/:id   | Update a product     |
| DELETE | /api/products/:id   | Delete a product     |

## License
This project is licensed under the **MIT License**.

