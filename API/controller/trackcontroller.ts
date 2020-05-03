import { Application, Request, Response, NextFunction, Router } from 'express'
import { injectable, inject } from 'inversify';
import TYPES from '../types';
import { ITrackService } from '../service/trackservice';
import { IController } from './icontroller';

@injectable()
export class TrackController implements IController {
  private trackService: ITrackService;

  constructor(@inject(TYPES.TrackService) trackService: ITrackService) {
    this.trackService = trackService;
  }

  public register(app: Application): void {
    app.route('/track/all')
      .get(async (req: Request, res: Response, next: NextFunction) => {
        const tracks = this.trackService.getTracks();
        res.json(tracks);
      })
    
    app.route('/track/:id')
      .get(async (req: Request, res: Response, next: NextFunction) => {
        const track = await this.trackService.getTrack(parseInt(req.params.id));
        res.json(track);
      })
     
  }
}