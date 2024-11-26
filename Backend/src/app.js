import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Configuración de CORS para permitir solicitudes desde http://localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173", // El origen de tu frontend
    credentials: true, // Esto es necesario si usas cookies o autenticación basada en sesión
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Ruta para tus interesados
app.use("/api", authRoutes);

export default app;
