import { NextFunction, Request, Response } from 'express';
import { ITask } from '../interface/Task';
import TaskService from '../service/taskService';

export default class TaskController {
  constructor(private taskService: TaskService) {}

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.taskService.findAll();

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: ITask = await this.taskService.create(req.body as ITask);

      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
  
      const response = await this.taskService.update(parseInt(id), status);

      if(!response) return res.status(404).json({ message: 'Não foi possivel encontrar a tarefa'})

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}