import { Response } from 'express';
import { HTTP_STATUS } from '../constants/http-status.constant';

export const Created = (res: Response, data: any) => {
  return res.status(HTTP_STATUS.CREATED).send(data);
};

export const Ok = (res: Response, data: any) => {
  return res.status(HTTP_STATUS.OK).send(data);
};

export const NoContent = (res: Response) => {
  return res.status(HTTP_STATUS.NO_CONTENT).send();
};

export const NotFound = (res: Response, data: any = { message: 'Not found' }) => {
  return res.status(HTTP_STATUS.NOT_FOUND).send(data);
};

export const BadRequest = (res: Response, data: any = { message: 'Bad request' }) => {
  return res.status(HTTP_STATUS.BAD_REQUEST).send(data);
};
