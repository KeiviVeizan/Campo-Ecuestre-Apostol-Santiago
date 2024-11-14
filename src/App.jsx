import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
// import TasksPages from "./pages/TasksPages.jsx";
// import TasksFormPage from "./pages/TasksFormPage.jsx";
// import ProfilePage from "./pages/ProfilePage.jsx";
import HomePage from "./Pages/HomePage.jsx";
// import ProtectedRoute from "./ProtectedRoute.jsx";
// import { TaskProvider } from "./context/TasksContext.jsx";
// import Navbar from "./components/Navbar.jsx";

// import "./App.css";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rutas Publicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          {/* Rutas Privadas */}
          {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route path="/tasks" element={<TasksPages />} /> */}
          {/* <Route path="/add-task" element={<TasksFormPage />} /> */}
          {/* <Route path="/tasks/:id" element={<TasksFormPage />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          {/* </Route> */}
        </Routes>
        {/* </main> */}
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;

