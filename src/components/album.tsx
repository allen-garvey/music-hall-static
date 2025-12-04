import React from 'react';
import type { Album } from '../models/tracks';
import { AlbumHeader } from './album-header';
import { TrackComponent } from './track';
import style from './album.module.css';

interface Props {
    album: Album;
    isPlaying: boolean;
}

export const AlbumComponent = ({ album, isPlaying }: Props) => {
    return (
        <div className={style.overallTrackContainer}>
            <AlbumHeader album={album} isPlaying={isPlaying} />
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.playButtonColumn}></th>
                        <th className={style.titleColumn}>Title</th>
                        <th className={style.timeColumn}>Time</th>
                        <th className={style.yearColumn}>Year</th>
                        <th className={style.shareColumn}></th>
                    </tr>
                </thead>
                <tbody>
                    {album.tracks.map((track, i) => (
                        <TrackComponent
                            track={track}
                            isPlaying={false}
                            trackIndex={i}
                            key={`${album.meta.title}-${track.filename}-${track.title}`}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
