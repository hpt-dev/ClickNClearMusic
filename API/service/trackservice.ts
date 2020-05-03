import { injectable, inject } from 'inversify';
import { ITrackRepository } from '../repository/trackrepository';
import { TrackDTO } from '../model/trackDTO';
import TYPES from '../types';

export interface ITrackService {
    getTracks(): Array<TrackDTO>;
    getTrack(id: number): TrackDTO | undefined;
}

@injectable()
export class TrackService implements ITrackService {
    @inject(TYPES.TrackRepository)
    private trackRepository!: ITrackRepository;

    public getTracks(): Array<TrackDTO> {
        return this.trackRepository.getAll();
    }

    public getTrack(id: number): TrackDTO | undefined {
        return this.trackRepository.get(id);
    }
}