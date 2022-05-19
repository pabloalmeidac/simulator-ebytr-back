import * as express from 'express';
import taskRouter from './route/taskRouter';

export default class App {
  public app: express.Express

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
  }

  private routes() {
    this.app.use('/task', taskRouter);
  }
  public start(PORT: string | number) {
    this.app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
}
