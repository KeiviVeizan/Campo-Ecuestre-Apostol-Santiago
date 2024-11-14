import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks,getTask,createTask,deleteTask,updateTask } from "../controllers/task.controller.js"; 
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js"; 
const router=Router()
//CRUD
router.get('/tasks',authRequired,getTasks)//Obtener uno solo

router.get('/tasks/:id',authRequired,getTask)//obtener un o especifico

router.post('/tasks',authRequired,validateSchema(createTaskSchema),createTask)//Crear

router.delete('/tasks/:id',authRequired,deleteTask)//eliminar uno especifico

router.put('/tasks/:id',authRequired,updateTask)//actualizar uno especifico

export default router