import { Router } from "express";
import {
  registerUser,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { register, getInterested  } from "../controllers/register.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import {loginSchema,registerSchema} from "../schemas/auth.schema.js";

const router = Router();
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);
router.post("/register",register);
router.post("/add-user", validateSchema(registerSchema),registerUser);
router.get("/interested", getInterested);

export default router;
