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

  update = async (id: number, status: string) => {
    const response = await this.taskModel.getById(id);
    
    if(!response.length) return undefined;
    
    await this.taskModel.update(id, status);
    return response;
  }
}