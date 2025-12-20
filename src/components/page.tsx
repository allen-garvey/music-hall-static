import React, { useState, useRef, useEffect } from 'react';
import type { Album, Track } from '../models/tracks';
import type { PlayState } from '../models/play-state';
import { AlbumComponent } from './album';
import { MediaControls } from './media-controls';
import { getUserVolume, saveUserVolume } from '../models/user-settings';

import style from './page.module.css';

interface Props {
    homeUrl: string;
    albums: Album[];
}

export const Page = ({ homeUrl, albums }: Props) => {
    const [playState, setPlayState] = useState<PlayState>('IS_EMPTY');
    const [elapsedTime, setElapsedTime] = useState(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(-1);
    const [currentAlbumIndex, setCurrentAlbumIndex] = useState(-1);
    const [audioVolume, setAudioVolume] = useState(getUserVolume());
    const [canPlayOpus, setCanPlayOpus] = useState(true);
    const audio = useRef(new Audio());
    const currentAlbum: Album | undefined = albums[currentAlbumIndex];
    const currentTrack: Track | undefined =
        currentAlbum?.tracks[currentTrackIndex];

    useEffect(() => {
        audio.current.addEventListener('loadeddata', () => {
            setPlayState('IS_PLAYING');
            audio.current.volume = audioVolume;
        });
        audio.current.addEventListener('ended', () => {
            if (
                currentAlbum &&
                currentTrackIndex < currentAlbum.tracks.length - 1
            ) {
                setCurrentTrackIndex(currentTrackIndex + 1);
                //TODO start audio function
                // this.startAudio();
            } else {
                setPlayState('IS_PAUSED');
            }
        });
        audio.current.addEventListener('timeupdate', e => {
            setElapsedTime(Math.floor(audio.current.currentTime));
        });
        setCanPlayOpus(audio.current.canPlayType('audio/ogg') !== '');
    }, []);

    const onTrackSeekRequested = (time: number) => {};
    const volumeChanged = (volume: number) => {
        setAudioVolume(volume);
        saveUserVolume(volume);
    };
    const onButtonClicked = () => {};

    const albumPlayButtonClicked = (albumIndex: number) => {
        if (!currentAlbum || currentAlbumIndex === albumIndex) {
            setCurrentAlbumIndex(albumIndex);
            setCurrentTrackIndex(0);
            setPlayState('IS_LOADING');
        } else {
            if (playState === 'IS_PAUSED') {
                setPlayState('IS_PLAYING');
            } else {
                setPlayState('IS_PAUSED');
            }
        }
    };

    const trackPlayButtonClicked = (trackIndex: number, albumIndex: number) => {
        if (
            !currentTrack ||
            currentAlbumIndex === albumIndex ||
            trackIndex !== currentTrackIndex
        ) {
            setCurrentTrackIndex(trackIndex);
            setCurrentAlbumIndex(albumIndex);
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
            {albums.map((album, i) => (
                <AlbumComponent
                    album={album}
                    isPlaying={
                        currentAlbum?.meta.slug === album.meta.slug &&
                        playState !== 'IS_PAUSED'
                    }
                    onTrackPlayRequested={(trackIndex: number) => {
                        trackPlayButtonClicked(trackIndex, i);
                    }}
                    onAlbumPlayRequested={() => albumPlayButtonClicked(i)}
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
