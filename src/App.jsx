import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import HomePage from "./Pages/HomePage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Vista_Interesados from "./Pages/Vista_Interesados.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx"
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="notfound" replace />} />
          <Route element={<ProtectedRoute />}>
              <Route path="/Vista_Interesados" element={<Vista_Interesados />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
