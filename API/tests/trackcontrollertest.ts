import 'reflect-metadata';
import test from 'tape';
import { TrackController } from '../controller/trackcontroller';
import { createMock } from 'ts-auto-mock';
import { ITrackService } from '../service/trackservice';

test('TrackController', (t) => {
    t.plan(1);

    const mockService: ITrackService = createMock<ITrackService>();
    const controller = new TrackController(mockService);

    t.assert(controller != null);
});