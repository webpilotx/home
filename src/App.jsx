import { importSPKI, jwtVerify } from "jose";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appStatuses, setAppStatuses] = useState({});
  const appPrefixes = import.meta.env.VITE_APPS.split(",").map(
    (app) => `/${app}`
  );

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

    async function checkAppStatus(prefix) {
      setAppStatuses((prev) => ({ ...prev, [prefix]: "Checking" }));
      try {
        const response = await fetch(prefix, { method: "HEAD" });
        if (response.ok) {
          setAppStatuses((prev) => ({ ...prev, [prefix]: "Online" }));
        } else {
          setAppStatuses((prev) => ({ ...prev, [prefix]: "Offline" }));
        }
      } catch (error) {
        console.warn(`App at ${prefix} is offline:`, error);
        setAppStatuses((prev) => ({ ...prev, [prefix]: "Offline" }));
      }
    }

    function checkAppsStatus() {
      appPrefixes.forEach((prefix) => {
        checkAppStatus(prefix);
      });
    }

    verifyToken();
    checkAppsStatus();
  }, []);

  const title = import.meta.env.VITE_TITLE;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
        <h1 className="text-lg font-bold">{title}</h1>
        <div>
          {isLoggedIn ? (
            <a
              href="/profile"
              className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
            >
              Profile
            </a>
          ) : (
            <a
              href="/auth"
              className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition"
            >
              Sign In
            </a>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Available Apps</h2>
          <ul className="space-y-4">
            {appPrefixes.map((app) => (
              <li key={app} className="flex items-center">
                <a
                  href={app}
                  className="flex-1 text-lg font-medium text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {app.replace("/", "").toUpperCase()}
                </a>
                <span
                  className={`px-3 py-1 text-sm rounded-md ${
                    appStatuses[app] === "Online"
                      ? "bg-green-100 text-green-800"
                      : appStatuses[app] === "Offline"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {appStatuses[app] || "Checking"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
