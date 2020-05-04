import { injectable, inject } from 'inversify';
import { ITrackRepository } from '../repository/trackrepository';
import { TrackDTO } from '../model/trackDTO';
import TYPES from '../types';

export interface ITrackService {
    getAll(): Array<TrackDTO>;
    getById(id: number): TrackDTO | undefined;
    getByArtist(artist: string): TrackDTO[] | undefined;
    search(term: string): TrackDTO[] | undefined;
}

@injectable()
export class TrackService implements ITrackService {
    @inject(TYPES.TrackRepository)
    private trackRepository!: ITrackRepository;

    public getAll(): Array<TrackDTO> {
        return this.trackRepository.getAll();
    }

    public getById(id: number): TrackDTO | undefined {
        return this.trackRepository.getById(id);
    }

    public getByArtist(artist: string): TrackDTO[] | undefined {
        return this.trackRepository.getByArtist(artist);
    }

    public search(term: string): TrackDTO[] | undefined {
        return this.trackRepository.search(term);
    }
}