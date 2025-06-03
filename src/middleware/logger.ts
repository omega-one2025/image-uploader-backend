import morgan from 'morgan';
import chalk from 'chalk';
import { Request, Response } from 'express';

// Custom morgan format with chalk
const customMorganFormat = morgan((tokens, req: Request, res: Response) => {
  const status = Number(tokens.status(req, res));
  let color = chalk.green;
  if (status >= 500) color = chalk.red;
  else if (status >= 400) color = chalk.yellow;
  else if (status >= 300) color = chalk.cyan;

  return [
    chalk.gray(tokens.date(req, res, 'iso')),
    chalk.magenta(tokens.method(req, res)),
    chalk.blue(tokens.url(req, res)),
    color(tokens.status(req, res)),
    chalk.white(tokens['response-time'](req, res) + ' ms'),
  ].join(' ');
});

export default customMorganFormat;
