import React, { useState, useRef, useEffect } from 'react';
import type { Album, Track } from '../models/tracks';
import type { PlayState } from '../models/play-state';
import { AlbumComponent } from './album';
import { MediaControls } from './media-controls';
import { getUserVolume, saveUserVolume } from '../models/user-settings';
import { mediaUrlForTrack } from '../models/audio-helpers';

import style from './page.module.css';

interface Props {
    homeUrl: string;
    albums: Album[];
}

export const Page = ({ homeUrl, albums }: Props) => {
    const audio = useRef(new Audio());
    const [playState, setPlayState] = useState<PlayState>('IS_EMPTY');
    const [elapsedTime, setElapsedTime] = useState(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(-1);
    const [currentAlbumIndex, setCurrentAlbumIndex] = useState(-1);
    const [audioVolume, setAudioVolume] = useState(getUserVolume());
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
                const nextTrackIndex = currentAlbumIndex + 1;
                setCurrentTrackIndex(nextTrackIndex);
                startAudio(currentAlbumIndex, nextTrackIndex);
            } else {
                setPlayState('IS_PAUSED');
            }
        });
        audio.current.addEventListener('timeupdate', e => {
            setElapsedTime(Math.floor(audio.current.currentTime));
        });
    }, []);

    const startAudio = (albumIndex: number, trackIndex: number) => {
        const currentTrack = albums[albumIndex].tracks[trackIndex];
        const audioCurrent = audio.current;

        audioCurrent.src = mediaUrlForTrack(
            currentTrack,
            audioCurrent.canPlayType('audio/ogg') !== ''
        );
        setPlayState('IS_LOADING');
        setElapsedTime(0);
        audioCurrent.load();
        audioCurrent.play();
    };

    const stopAudio = () => {
        setPlayState('IS_PAUSED');
        audio.current.pause();
    };

    const restartAudio = () => {
        setPlayState('IS_PLAYING');
        audio.current.play();
    };

    const onTrackSeekRequested = (time: number) => {
        audio.current.currentTime = time;
    };
    const volumeChanged = (volume: number) => {
        setAudioVolume(volume);
        saveUserVolume(volume);
    };
    const onMainMediaControlsButtonClicked = () => {
        if (playState === 'IS_PAUSED') {
            restartAudio();
        } else {
            stopAudio();
        }
    };

    const albumPlayButtonClicked = (albumIndex: number) => {
        if (!currentAlbum || currentAlbumIndex !== albumIndex) {
            setCurrentAlbumIndex(albumIndex);
            setCurrentTrackIndex(0);
            startAudio(albumIndex, 0);
        } else {
            onMainMediaControlsButtonClicked();
        }
    };

    const trackPlayButtonClicked = (trackIndex: number, albumIndex: number) => {
        if (
            !currentTrack ||
            currentAlbumIndex !== albumIndex ||
            trackIndex !== currentTrackIndex
        ) {
            setCurrentTrackIndex(trackIndex);
            setCurrentAlbumIndex(albumIndex);
            startAudio(albumIndex, trackIndex);
        } else {
            onMainMediaControlsButtonClicked();
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
                    buttonClicked={onMainMediaControlsButtonClicked}
                    playState={playState}
                />
            ) : null}
        </div>
    );
};
