import * as express from 'express';

export default class App {
  public app: express.Express

  constructor() {
    this.app = express();
    this.app.use(express.json());

  }
  public start(PORT: string | number) {
    this.app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
}
