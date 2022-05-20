import * as express from 'express';
import error from './middleware/error';
import taskRouter from './route/taskRouter';

export default class App {
  public app: express.Express

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorMiddleware();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
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
