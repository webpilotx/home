# WebPilotX Home

Welcome to `WebPilotX Home`, a modern web application built with Vite, React, and Express.

## Features

- **Dynamic Title**: The application dynamically uses the title from the environment variable `VITE_TITLE`.
- **JWT Authentication**: Verifies JWT tokens using the `jose` library.
- **Express Backend**: Includes an Express server integrated with Vite for seamless development.
- **Responsive Design**: Styled with Tailwind CSS for a modern and responsive UI.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   VITE_TITLE=WebPilotX Home
   VITE_PUBLIC_KEY=YourPublicKeyHere
   PORT=3000
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### API Endpoints

- **GET /message**: Returns a simple message from the Express backend.

## Project Structure

```
/home/chientrm/home
├── index.html          # Main HTML file
├── src
│   ├── main.jsx        # React entry point
│   ├── index.css       # Global styles
├── server.js           # Express server
├── README.md           # Project documentation
```

## License

This project is licensed under the MIT License.
