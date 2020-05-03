import { injectable } from 'inversify';

export interface ITrackDTO {
    _id?: number;
    artist: string;
    title?: string;
}

//@injectable()
export class TrackDTO implements ITrackDTO{
    public id: number;
    public artist: string;
    public title: string;

    constructor(id: number, artist: string, title: string) {
        this.id = id;
        this.artist = artist;
        this.title = title;
    }
}