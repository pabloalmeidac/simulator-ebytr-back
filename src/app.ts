import * as express from 'express';
import error from './middleware/error';
import taskRouter from './route/taskRouter';

export default class App {
  public app: express.Express

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
    this.errorMiddleware();
  }

  private routes() {
    this.app.use('/task', taskRouter);
  }

  private errorMiddleware() {
    this.app.use(error);
  }

  public start(PORT: string | number) {
    this.app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
}
