import type { Track } from './tracks';

const extensionForTrack = (isMp3: boolean, canPlayOpus: boolean): string => {
    if (canPlayOpus) {
        return 'opus';
    }
    return isMp3 ? 'mp3' : 'm4a';
};

export const mediaUrlForTrack = (
    track: Track,
    canPlayOpus: boolean
): string => {
    const extension = extensionForTrack(!!track.isMp3, canPlayOpus);
    return `/media/music/${track.filename}.${extension}`;
};
