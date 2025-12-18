import React, { useState } from 'react';
import { formatSeconds } from '../view-helpers/time';
import type { Track } from '../models/tracks';
import type { PlayState } from '../models/play-state';
import style from './media-controls.module.css';

const getVolumeIcon = (audioVolume: number): string => {
    if (audioVolume === 0) {
        return '#icon-volume-x';
    }
    if (audioVolume <= 0.6) {
        return 'icon-volume-2';
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
    const [trackSeekTimeout, setTrackSeekTimeout] = useState<number | null>(
        null
    );

    const progressBarUpdated = (e: Event) => {
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
                    input={progressBarUpdated}
                />
            </div>
            <div className={style.innerContainer}>
                <div className={style.titleContainer}>
                    <span>{currentTrack.title}</span>
                    <span>
                        {formatSeconds(elapsedTime)} -
                        {formatSeconds(currentTrack.length)}
                    </span>
                </div>
                <div className={style.controlsContainer}>
                    {hasAudio ? (
                        <div className={style.buttonContainer}>
                            <button onClick={buttonClicked} tabindex="1">
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
                                tabindex="2"
                                type="range"
                                min="0"
                                max="1"
                                value={audioVolume}
                                step="0.05"
                                className={style.volumeInput}
                                input={$event =>
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
