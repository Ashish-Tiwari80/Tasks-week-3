import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    const updateToken = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("auth-change", updateToken);
    window.addEventListener("storage", updateToken);

    return () => {
      window.removeEventListener("auth-change", updateToken);
      window.removeEventListener("storage", updateToken);
    };
  }, []);

  return (
    <Routes>

      <Route
        path="/"
        element={token ? <Home /> : <Navigate to="/login" />}
      />

      <Route
        path="/login"
        element={!token ? <Login /> : <Navigate to="/" />}
      />

      <Route
        path="/register"
        element={!token ? <Register /> : <Navigate to="/" />}
      />

    </Routes>
  );
}

export default App;