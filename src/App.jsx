import { importSPKI, jwtVerify } from "jose";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function verifyToken() {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const publicKey = await importSPKI(
            import.meta.env.VITE_PUBLIC_KEY,
            "RS256"
          );
          await jwtVerify(token, publicKey);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        setIsLoggedIn(false);
      }
    }

    verifyToken();
  }, []);

  const title = import.meta.env.VITE_TITLE;

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-lg font-bold">{title}</h1>
        <div>
          {isLoggedIn ? (
            <a
              href="/profile"
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Profile
            </a>
          ) : (
            <a
              href="/auth"
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Sign In
            </a>
          )}
        </div>
      </nav>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-4xl font-bold">Welcome to {title}</h1>
      </div>
    </div>
  );
}

export default App;
