# chientrm.com

This project is a React-based web application that dynamically displays available apps and verifies user authentication using JSON Web Tokens (JWT).

## Features

- **Dynamic App Loading**: The list of apps is dynamically loaded from the `VITE_APPS` environment variable in the `.env` file.
- **JWT Authentication**: Verifies user authentication using a public key and JWT.
- **App Status Check**: Checks the online status of apps and displays them in the UI.
- **Responsive Design**: Fully responsive UI with light and dark mode support.

## Environment Variables

The application relies on the following environment variables, defined in the `.env` file:

- `VITE_PUBLIC_KEY`: The public key used for JWT verification.
- `VITE_TITLE`: The title of the application, displayed in the navbar and main content.
- `VITE_APPS`: A comma-separated list of app prefixes (e.g., `weather,finance,news,coins`).

Example `.env` file:

```properties
VITE_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoaiZJhdYfR/E05jd6MxS\nVo8FjalHSkez+po/tuRRTJWemQwrFG6Hx9WmbE6moCDZw2TuDHjM++CJ94104sHa\nC5nIkU65XMFhccpJQraZOFWWmV9z9Gr0uw9T0Enjek4CqrUzzB1T6HxVDq9TuZZL\nKaTCTQ0LOY+eHj9RM0jPWsB9KL6/1dmOswFlQgOOmcYPsyEqlzZ+TinZLjnF9ayH\ninoPeAcivoPc7272diVqHCN6J0OF9taR/3LuUHVKBzeN0jindZmzCC4z+1p9B06F\n/mP8k4jTrGuArqfsge5Ci9hxsYjjO+LuiBKvwE9FHGs99zayJ79ZEz0+kwq2Fu5D\nrQIDAQAB\n-----END PUBLIC KEY-----"
VITE_TITLE="chientrm.com"
VITE_APPS=weather,finance,news,coins
```

## How It Works

1. **Dynamic App Prefixes**: The app prefixes are loaded from the `VITE_APPS` variable and used to check the online status of each app.
2. **JWT Verification**: The app retrieves the JWT from `localStorage` and verifies it using the public key.
3. **Online Status Check**: Each app's status is checked using a `HEAD` request, and online apps are displayed in the UI.

## Running the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/chientrm.com.git
   cd chientrm.com
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and define the required environment variables.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Deployment

To deploy the application, ensure the `.env` file is correctly configured and build the project:

```bash
npm run build
```

Then, serve the `dist` folder using your preferred hosting solution.

## License

This project is licensed under the MIT License.
