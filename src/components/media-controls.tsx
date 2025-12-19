import React, { FormEvent, useState } from 'react';
import { formatSeconds } from '../view-helpers/time';
import type { Track } from '../models/tracks';
import type { PlayState } from '../models/play-state';
import style from './media-controls.module.css';

const getVolumeIcon = (audioVolume: number): string => {
    if (audioVolume === 0) {
        return '#icon-volume-x';
    }
    if (audioVolume <= 0.6) {
        return '#icon-volume-1';
    }
    return '#icon-volume-2';
};

interface Props {
    currentTrack: Track;
    elapsedTime: number;
    audioVolume: number;
    onTrackSeekRequested: (time: number) => void;
    volumeChanged: (volume: number) => void;
    buttonClicked: () => void;
    playState: PlayState;
}

export const MediaControls = ({
    currentTrack,
    elapsedTime,
    audioVolume,
    onTrackSeekRequested,
    volumeChanged,
    buttonClicked,
    playState,
}: Props) => {
    const [trackSeekTimeout, setTrackSeekTimeout] = useState<
        number | undefined
    >(undefined);

    const progressBarUpdated = (e: FormEvent) => {
        clearTimeout(trackSeekTimeout);
        const time = parseInt((e.target as HTMLInputElement).value);
        setTrackSeekTimeout(
            setTimeout(() => {
                onTrackSeekRequested(time);
            }, 300)
        );
    };

    const hasAudio = playState !== 'IS_EMPTY' && playState !== 'IS_LOADING';

    return (
        <div className={style.container}>
            <div className={style.progressBarContainer}>
                <input
                    type="range"
                    min="0"
                    max={currentTrack.length}
                    step="1"
                    value={elapsedTime}
                    onInput={progressBarUpdated}
                />
            </div>
            <div className={style.innerContainer}>
                <div className={style.titleContainer}>
                    <span>
                        {playState === 'IS_LOADING'
                            ? 'Loading…'
                            : currentTrack.title}
                    </span>
                    <span>
                        {formatSeconds(elapsedTime)} -
                        {formatSeconds(currentTrack.length)}
                    </span>
                </div>
                <div className={style.controlsContainer}>
                    {hasAudio ? (
                        <div className={style.buttonContainer}>
                            <button onClick={buttonClicked} tabIndex={1}>
                                <svg className={style.icon} viewBox="0 0 24 24">
                                    <use
                                        xlinkHref={
                                            playState === 'IS_PAUSED'
                                                ? '#icon-play'
                                                : '#icon-pause'
                                        }
                                    />
                                </svg>
                            </button>
                        </div>
                    ) : null}
                    {playState !== 'IS_EMPTY' ? (
                        <div
                            className={style.volumeContainer}
                            v-show="!isAudioEmpty"
                        >
                            <svg
                                className={style.volumeIcon}
                                viewBox="0 0 24 24"
                            >
                                <use xlinkHref={getVolumeIcon(audioVolume)} />
                            </svg>
                            <input
                                tabIndex={2}
                                type="range"
                                min="0"
                                max="1"
                                value={audioVolume}
                                step="0.05"
                                className={style.volumeInput}
                                onInput={$event =>
                                    volumeChanged(
                                        parseFloat(
                                            ($event.target as HTMLInputElement)
                                                .value
                                        )
                                    )
                                }
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
