# Growly

Growly is a full-stack web application for booking free demos and managing AI for Meta and Google Advertisements. It consists of a React frontend and a Node.js/Express backend with MongoDB Atlas.

## Features

- Book a free demo via a simple form
- Store and retrieve lead information
- User authentication (register/login)
- Admin dashboard for viewing leads

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas

## Getting Started

### Prerequisites

- Node.js & npm installed
- MongoDB Atlas account

### Installation

1. **Clone the repository:**
   ```sh
   git clone <https://github.com/Manu04Tiwari/Growly.git>
   cd Growly
   ```

2. **Backend setup:**
   ```sh
   cd growly-backend
   npm install
   ```
   - Create a `.env` file with:
     ```
     PORT=5000
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     JWT_EXPIRES_IN=7d
     ```

3. **Frontend setup:**
   ```sh
   cd ../client
   npm install
   ```
   - Ensure `proxy` is set in `package.json`:
     ```json
     "proxy": "http://localhost:5000"
     ```

### Running the App

1. **Start the backend:**
   ```sh
   cd growly-backend
   npm run start
   ```

2. **Start the frontend:**
   ```sh
   cd ../client
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

- `POST /api/leads` — Submit a new lead
- `GET /api/leads` — Retrieve all leads (admin)
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login

## License

MIT