import 'reflect-metadata';
import test from 'tape';
import { TrackService } from '../service/trackservice';
import { createMock } from 'ts-auto-mock';
import { ITrackRepository } from '../repository/trackrepository';

test('TrackController', (t) => {
    t.plan(1);

    const controller = new TrackService();

    t.assert(controller != null);
});