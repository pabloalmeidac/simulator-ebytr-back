import { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { ITask } from "../interface/Task";

export default class TaskModel {
  constructor(private connection: Pool) {}

  async getAll() {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM to_do_list.Task;',
    );

    return result;
  }

  async create({ name, status }: ITask) {
    const sql = `INSERT INTO to_do_list.Task(name, status) VALUES (?, ?);`;
    
    const [result] = await this.connection.execute<ResultSetHeader>(sql, [name, status]);

    return { id: result.insertId, name, status };
  }

  async update({ id, name, status }: ITask) {
    const sql = `UPDATE to_do_list.Task SET name = ?, status = ? where id = ?`;
  
    await this.connection.execute<ResultSetHeader>(sql, [name, status, id]);

    return {name, status};
  }
}