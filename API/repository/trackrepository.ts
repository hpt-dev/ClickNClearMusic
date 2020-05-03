import { injectable } from 'inversify';
import { TrackDTO } from '../model/trackDTO';
import fs from 'fs'

export interface ITrackRepository {
    getAll(): TrackDTO[];
    getById(id: number): TrackDTO | undefined;
    getByArtist(artist: string): TrackDTO[] | undefined;
}

@injectable()
export class TrackRepository implements ITrackRepository {
    private data: TrackDTO[];

    constructor(){
        this.data = [];
        this.loadFile();
    }

    public getAll(): TrackDTO[] {
        return this.data;
    }

    public getById(id: number): TrackDTO | undefined {
        return this.data.find(x => x.id === id);
    }

    public getByArtist(artist: string): TrackDTO[] | undefined {
        return this.data.filter(x => x.artist === artist);
    }

    private async loadFile(){
        let rawdata: string = fs.readFileSync('./data/tracks.json').toString();
        let rawjson = JSON.parse(rawdata).tracks;

        rawjson.forEach((track: { id: number; artist: string; title: string; }) => {
            let item: TrackDTO = new TrackDTO(track.id, track.artist, track.title);
            this.data.push(item);
        });
    }
}
