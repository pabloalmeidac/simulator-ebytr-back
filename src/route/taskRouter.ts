import { Router } from "express";
import TaskController from "../controller/taskController";
import connection from "../db/connection";
import TaskModel from "../model/taskModel";
import TaskService from "../service/taskService";

const taskRouter = Router();

const taskModel = new TaskModel(connection);
const taskService = new TaskService(taskModel);
const taskController = new TaskController(taskService);

taskRouter.get('/', taskController.findAll);
taskRouter.post('/', taskController.create);


export default taskRouter;
