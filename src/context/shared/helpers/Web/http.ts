import { Response } from 'express';

export const Ok = (res: Response, result: any) => {
  return res.status(200).send(result);
};

export const BadRequest = (res: Response, message: any) => {
  return res.status(500).send({ message });
};

export const NotFound = (res: Response) => {
  return res.status(404).send('');
};
