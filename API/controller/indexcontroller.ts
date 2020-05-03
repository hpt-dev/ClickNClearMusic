import { Application, Request, Response, NextFunction, Router } from 'express'
import { injectable, inject } from 'inversify';
import TYPES from '../types';
import { IController } from './icontroller';

@injectable()
export class IndexController implements IController {

  constructor() {
  }

  public register(app: Application): void {
    app.route('/').get(function(req: Request, res: Response, nxt: NextFunction) {
      res.render('index', { title: 'CC Music' });
    });
  }
}