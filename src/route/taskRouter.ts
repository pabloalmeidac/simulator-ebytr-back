import { Router } from "express";
import connection from "../db/connection";
import TaskController from "../controller/taskController";
import TaskModel from "../model/taskModel";
import TaskService from "../service/taskService";
import createSchema from "../schema/create";
import validateBody from "../middleware/validateBody";
import editSchema from "../schema/edit";

const taskModel = new TaskModel(connection);
const taskService = new TaskService(taskModel);
const taskController = new TaskController(taskService);

const taskRouter = Router();

taskRouter.get('/', taskController.findAll);
taskRouter.post('/', validateBody(createSchema), taskController.create);
taskRouter.put('/:id', validateBody(editSchema), taskController.update);
taskRouter.delete('/:id', taskController.remove);

export default taskRouter;
