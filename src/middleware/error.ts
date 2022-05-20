import { ErrorRequestHandler } from 'express';

const error: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);
  res.status(500).end();
}

export default error;