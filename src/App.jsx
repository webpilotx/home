import { importSPKI, jwtVerify } from "jose";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onlineApps, setOnlineApps] = useState([]);
  const appPrefixes = ["/weather"];

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

    async function checkAppsStatus() {
      const onlineApps = [];
      for (const prefix of appPrefixes) {
        try {
          const response = await fetch(prefix, { method: "HEAD" });
          if (response.ok) {
            onlineApps.push(prefix);
          }
        } catch (error) {
          console.warn(`App at ${prefix} is offline:`, error);
        }
      }
      setOnlineApps(onlineApps);
    }

    verifyToken();
    checkAppsStatus();
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
        <div>
          <h1 className="text-4xl font-bold">Welcome to {title}</h1>
          <div className="mt-4">
            <h2 className="text-2xl">Available Apps:</h2>
            <ul>
              {onlineApps.map((app) => (
                <li key={app}>
                  <a
                    href={app}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {app}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
