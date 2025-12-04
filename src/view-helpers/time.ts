import type { Track } from '../models/tracks';

export const formatSeconds = (seconds: number): string => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60)
        .toString()
        .padStart(2, '0')}`;
};

const formatTimeDescription = (count: number, descriptor: string): string => {
    if (count === 0) {
        return '';
    }
    if (count === 1) {
        return `1 ${descriptor}`;
    }
    return `${count} ${descriptor}s`;
};

export const albumTime = (tracks: Track[]): string => {
    const totalLengthInSeconds = tracks.reduce(
        (total, track) => total + track.length,
        0
    );
    const hours = Math.floor(totalLengthInSeconds / 3600);
    const minutes = Math.round((totalLengthInSeconds - hours * 3600) / 60);

    return [
        formatTimeDescription(hours, 'hour'),
        formatTimeDescription(minutes, 'minute'),
    ]
        .filter(s => s)
        .join(' ');
};
