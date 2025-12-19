import React, { useState } from 'react';
import type { Album, Track } from '../models/tracks';
import type { PlayState } from '../models/play-state';
import { AlbumComponent } from './album';
import { MediaControls } from './media-controls';

import style from './page.module.css';

interface Props {
    homeUrl: string;
    albums: Album[];
}

export const Page = ({ homeUrl, albums }: Props) => {
    const [playState, setPlayState] = useState<PlayState>('IS_EMPTY');
    const [elapsedTime, setElapsedTime] = useState(0);
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [currentAlbum, setCurrentAlbum] = useState<Album | null>(null);
    const [audioVolume, setAudioVolume] = useState(0);

    const onTrackSeekRequested = (time: number) => {};
    const volumeChanged = (volume: number) => {
        setAudioVolume(volume);
    };
    const onButtonClicked = () => {};

    const albumPlayButtonClicked = (album: Album) => {
        if (!currentAlbum || currentAlbum.meta.slug !== album.meta.slug) {
            setCurrentTrack(album.tracks[0]);
            setCurrentAlbum(album);
            setPlayState('IS_LOADING');
        } else {
            if (playState === 'IS_PAUSED') {
                setPlayState('IS_PLAYING');
            } else {
                setPlayState('IS_PAUSED');
            }
        }
    };

    const trackPlayButtonClicked = (track: Track, album: Album) => {
        if (!currentTrack || currentTrack.filename !== track.filename) {
            setCurrentTrack(track);
            setCurrentAlbum(album);
            setPlayState('IS_LOADING');
        } else {
            if (playState === 'IS_PAUSED') {
                setPlayState('IS_PLAYING');
            } else {
                setPlayState('IS_PAUSED');
            }
        }
    };

    return (
        <div className={style.container}>
            <h1 className={style.title}>
                <a href={homeUrl}>Allen Garvey</a>
            </h1>
            <p className={style.description}>
                Selected musical compositions and recordings
            </p>
            {albums.map(album => (
                <AlbumComponent
                    album={album}
                    isPlaying={
                        currentAlbum?.meta.slug === album.meta.slug &&
                        playState !== 'IS_PAUSED'
                    }
                    onTrackPlayRequested={(track: Track) => {
                        trackPlayButtonClicked(track, album);
                    }}
                    onAlbumPlayRequested={() => albumPlayButtonClicked(album)}
                    currentTrack={currentTrack}
                    key={album.meta.title}
                />
            ))}
            {currentTrack ? (
                <MediaControls
                    currentTrack={currentTrack}
                    elapsedTime={elapsedTime}
                    audioVolume={audioVolume}
                    onTrackSeekRequested={onTrackSeekRequested}
                    volumeChanged={volumeChanged}
                    buttonClicked={onButtonClicked}
                    playState={playState}
                />
            ) : null}
        </div>
    );
};
