import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import HomePage from "./Pages/HomePage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import { MoreInformation } from "./Components/MoreInformation.jsx";
import { Footer } from "./Components/Footer.jsx";

import Vista_Interesados from "./Pages/Vista_Interesados.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx"
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/areas-deportivas/:id" element={<MoreInformation/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/notfound" element={<NotFound />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="*" element={<Navigate to="notfound" replace />} />
          <Route element={<ProtectedRoute />}>
              <Route path="/Vista_Interesados" element={<Vista_Interesados />} />
            </Route>
        </Routes>
          <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
