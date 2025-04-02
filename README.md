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
- pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/webpilotx/home
   cd home
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   VITE_TITLE=WebPilotX Home
   VITE_PUBLIC_KEY=Your RSA256 SPKI Public Key Here
   PORT=3000 # Optional, defaults to 3000 if not set
   ```

### Running the Application in Development

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Building and Running the Application in Production

1. Build the application:

   ```bash
   pnpm build
   ```

2. Start the production server:

   ```bash
   NODE_ENV=production node server.js
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## License

This project is licensed under the MIT License.
