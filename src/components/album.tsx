import React from 'react';
import type { Album, Track } from '../models/tracks';
import { AlbumHeader } from './album-header';
import { TrackComponent } from './track';
import style from './album.module.css';

interface Props {
    album: Album;
    isPlaying: boolean;
    currentTrack: Track | undefined;
    onTrackPlayRequested: (trackIndex: number) => void;
    onAlbumPlayRequested: () => void;
}

export const AlbumComponent = ({
    album,
    isPlaying,
    currentTrack,
    onTrackPlayRequested,
    onAlbumPlayRequested,
}: Props) => {
    return (
        <div className={style.overallTrackContainer}>
            <AlbumHeader
                album={album}
                isPlaying={isPlaying}
                onPlayButtonClicked={onAlbumPlayRequested}
            />
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
                            albumSlug={album.meta.slug}
                            isPlaying={
                                isPlaying &&
                                currentTrack?.filename === track.filename
                            }
                            trackIndex={i}
                            key={`${album.meta.title}-${track.filename}-${track.title}`}
                            onTrackPlayRequested={() => {
                                onTrackPlayRequested(i);
                            }}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
