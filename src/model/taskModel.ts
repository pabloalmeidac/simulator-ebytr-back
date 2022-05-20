import { OkPacket, Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { ITask } from "../interface/Task";

export default class TaskModel {
  constructor(private connection: Pool) {}

  async getAll() {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM to_do_list.Task;',
    );

    return result;
  }

  async getById(id: number) {
    const sql =  'SELECT * FROM to_do_list.Task where id = ?;';

    const [result] = await this.connection.execute<RowDataPacket[]>(sql, [id]);
    return result;
  }

  async create({ name, status }: ITask) {
    const sql = `INSERT INTO to_do_list.Task(name, status) VALUES (?, ?);`;
    
    const [result] = await this.connection.execute<ResultSetHeader>(sql, [name, status]);

    return { id: result.insertId, name, status };
  }

  async update(id: number, status: string) {
    const sql = `UPDATE to_do_list.Task SET status = ? where id = ?`;
  
    return await this.connection.execute<ResultSetHeader>(sql, [status, id]);
  }

  async remove(id: number) {
    const sql = `DELETE FROM to_do_list.Task WHERE id = ?`;
    await this.connection.execute<OkPacket>(sql, [ id]);
  }
}