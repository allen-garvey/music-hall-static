import React from 'react';
import { formatSeconds } from '../view-helpers/time';
import type { Track } from '../models/tracks';
import style from './track.module.css';

interface Props {
    track: Track;
    isPlaying: boolean;
    trackIndex: number;
    onTrackPlayRequested: () => void;
}

export const TrackComponent = ({
    track,
    isPlaying,
    trackIndex,
    onTrackPlayRequested,
}: Props) => {
    return (
        <tr className={style.trackRow}>
            <td className={style.iconContainer} tabIndex={0}>
                <button
                    title={isPlaying ? 'Pause' : 'Play'}
                    className={style.trackButton}
                    onClick={onTrackPlayRequested}
                >
                    <svg
                        className={`${style.icon} ${style.playIcon}`}
                        viewBox="0 0 24 24"
                    >
                        <use
                            xlinkHref={isPlaying ? '#icon-pause' : '#icon-play'}
                        />
                    </svg>
                </button>
                <span className={style.trackNumber}>{trackIndex + 1}</span>
            </td>
            <td>{track.title}</td>
            <td>{formatSeconds(track.length)}</td>
            <td>{track.year}</td>
            <td>
                <a className={style.shareLink}>
                    <svg className={style.icon} viewBox="0 0 24 24">
                        <use xlinkHref="#icon-share" />
                    </svg>
                </a>
            </td>
        </tr>
    );
};
