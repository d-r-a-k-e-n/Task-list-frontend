import { useContext, useState, useCallback } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import TaskList from "./pages/TaskList";
import { Navigate, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "./services/authService";

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

const PublicRoute = ({ element }) => {
  return isAuthenticated() ? <Navigate to="/" replace /> : element;
};

function App() {
  const { isLightTheme } = useContext(ThemeContext);
  const [, setTick] = useState(0);
  const refreshAuth = useCallback(() => setTick((t) => t + 1), []);

  return (
    <div className={isLightTheme ? "light-theme" : "dark-theme"}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute element={<TaskList onAuthChange={refreshAuth} />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute element={<Login />} />}
        />
        <Route
          path="/signup"
          element={<PublicRoute element={<Signup />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
