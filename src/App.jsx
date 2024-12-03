import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import HomePage from "./Pages/HomePage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import { MoreInformation } from "./Components/MoreInformation.jsx";
import { MoreInformationAreas } from "./Components/MoreInformationAreas.jsx";
import { PlanesPage } from "./Pages/PlanesPage.jsx";
import AdminPage from "./Pages/AdminPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import RegisterFormPage from "./Pages/RegisterFormPage.jsx";
// import config from "./bot/config.js";
// import MessageParser from "./bot/MessageParser.jsx";
// import ActionProvider from './bot/ActionProvider.jsx';
// import Chatbot from 'react-chatbot-kit'
// import 'react-chatbot-kit/build/main.css'
// const MyComponent = () => {
//   return (
//     <div>
//       <Chatbot
//         config={config}
//         messageParser={MessageParser}
//         actionProvider={ActionProvider}
//       />
//     </div>
//   );
// };
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/areas-deportivas/:id" element={<MoreInformation />} />
          <Route path="/areas-comunes/:id" element={<MoreInformationAreas />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/planes" element={<PlanesPage />} />
          <Route path="/contactanos" element={<RegisterPage/>}/>
          <Route path="*" element={<Navigate to="notfound" replace />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/add-user" element={<RegisterFormPage/>}/>
          </Route>
        </Routes>
        {/* <Footer /> */}
        {/* <ChatBot/> */}
      </BrowserRouter>
      
    </AuthProvider>
  );
}
export default App;
