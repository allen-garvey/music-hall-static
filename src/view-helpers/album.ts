import type { Album } from '../models/tracks';

export const yearDescriptionForAlbum = (album: Album): string => {
    if (album.tracks.length === 0) {
        return '';
    }

    let minYear: number = Infinity;
    let maxYear: number = 0;

    album.tracks.forEach(track => {
        minYear = Math.min(minYear, track.year);
        maxYear = Math.max(maxYear, track.year);
    });

    if (minYear === maxYear) {
        return `${minYear}`;
    }
    return `${minYear}-${maxYear}`;
};
