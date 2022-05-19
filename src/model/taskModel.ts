import { Pool, RowDataPacket } from "mysql2/promise";

export default class TaskModel {
  constructor(private connection: Pool) {}

  async getAll() {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM to_do_list.Task;',
    );

    return result;
  }
}