import TaskModel from '../model/taskModel';

export default class TaskService {
  constructor(private taskModel: TaskModel) {}

  findAll = async () => {
    const response = await this.taskModel.getAll();
    return response;
  };
}