import { ITask } from '../interface/Task';
import TaskModel from '../model/taskModel';

export default class TaskService {
  constructor(private taskModel: TaskModel) {}

  findAll = async () => {
    return await this.taskModel.getAll();
  };

  create = async ({ name, status }: ITask) => {
    return await this.taskModel.create({name, status});
  }
}