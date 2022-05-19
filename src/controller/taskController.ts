import { NextFunction, Request, Response } from 'express';
import TaskService from '../service/taskService';

export default class TaskController {
  constructor(private taskService: TaskService) {}

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: any = await this.taskService.findAll();

      return res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };
}