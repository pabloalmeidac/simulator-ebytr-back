import { Router } from "express";
import connection from "../db/connection";
import TaskController from "../controller/taskController";
import TaskModel from "../model/taskModel";
import TaskService from "../service/taskService";

const taskModel = new TaskModel(connection);
const taskService = new TaskService(taskModel);
const taskController = new TaskController(taskService);

const taskRouter = Router();

taskRouter.get('/', taskController.findAll);
taskRouter.post('/', taskController.create);
taskRouter.put('/:id', taskController.update);
taskRouter.delete('/:id', taskController.remove);

export default taskRouter;
