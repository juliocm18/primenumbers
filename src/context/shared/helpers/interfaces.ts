import { Request } from 'express';

export interface IGetEmailAuthInfoRequest extends Request {
  email: string;
}
