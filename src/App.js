import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "./context/ThemeContext";
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import TaskList from "./pages/TaskList";
import {Navigate, Route, Routes} from "react-router-dom";

const PrivateRoute = ({element, isAuth}) => {
  return isAuth === 'true' ? element : <Navigate to="/login" replace/>;
};

const PrivateRouteToDo = ({element, isAuth}) => {
  return isAuth !== 'true' ? element : <Navigate to="/" replace/>;
};

function App() {
  const {isLightTheme} = useContext(ThemeContext);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") || 'false');

  useEffect(() => {
    const checkAuth = () => {
      const isAuthValue = localStorage.getItem("isAuth");
      if (isAuth !== isAuthValue) {
        setIsAuth(isAuthValue);
      }
    };
    window.addEventListener('storage', checkAuth);
    checkAuth();

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, [isAuth]);

  return (
    <div className={isLightTheme ? "light-theme" : "dark-theme"}>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute isAuth={isAuth} element={<TaskList/>}/>}
        />
        <Route
          path="/login"
          element={<PrivateRouteToDo isAuth={isAuth} element={<Login/>}/>}
        />
        <Route
          path="/signup"
          element={<PrivateRouteToDo isAuth={isAuth} element={<Signup/>}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
