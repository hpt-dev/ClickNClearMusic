import {Container} from 'inversify';
import TYPES from './types';
import { ITrackRepository, TrackRepository } from './repository/trackrepository';
import { ITrackService, TrackService } from './service/trackservice';
import { TrackController } from './controller/trackcontroller';
import { IController } from './controller/icontroller';

const container = new Container();
container.bind<ITrackRepository>(TYPES.TrackRepository).to(TrackRepository).inSingletonScope();
container.bind<ITrackService>(TYPES.TrackService).to(TrackService).inSingletonScope();
container.bind<IController>(TYPES.Controller).to(TrackController).inSingletonScope();

export default container;