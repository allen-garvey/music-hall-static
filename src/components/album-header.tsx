import React from 'react';
import type { Album } from '../models/tracks';
import { yearDescriptionForAlbum } from '../view-helpers/album';
import { albumTime } from '../view-helpers/time';
import style from './album-header.module.css';

const getDescriptionRows = (album: Album): string[] => {
    const descriptionMap: Map<string, string[]> = new Map();

    const trackDescriptions: string[] = album.tracks
        .filter(track => {
            if (!track.description) {
                return false;
            }
            if (descriptionMap.has(track.description)) {
                descriptionMap.get(track.description)?.push(track.title);
                return false;
            }
            descriptionMap.set(track.description, [track.title]);
            return true;
        })
        .map(
            track =>
                `${descriptionMap
                    .get(track.description as string)
                    ?.join(', ')}: ${track.description}`
        );

    return (album.meta.description || []).concat(trackDescriptions);
};

interface Props {
    album: Album;
}

export const AlbumHeader = ({ album }: Props) => {
    const descriptionRows = getDescriptionRows(album);

    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img
                    src={`/media/images/${
                        album.meta.coverImage || album.meta.slug
                    }.webp`}
                    alt={`${album.meta.title} by ${album.meta.artist} album cover`}
                    className={style.coverImage}
                    loading="lazy"
                />
                <div className={style.albumCoverOverlay}>
                    <svg viewBox="0 0 24 24">
                        <use xlinkHref="#icon-pause" />
                        <use xlinkHref="#icon-play" />
                    </svg>
                </div>
            </div>
            <div className={style.infoContainer}>
                <table className={style.table}>
                    <tbody>
                        <tr>
                            <td>
                                <h3>{album.meta.title}</h3>
                            </td>
                            <td
                                className={`${style.secondaryInfo} ${style.mobileHide}`}
                            >
                                {yearDescriptionForAlbum(album)}
                            </td>
                        </tr>
                        <tr>
                            <td>{album.meta.artist}</td>
                            <td
                                className={`${style.secondaryInfo} ${style.mobileHide}`}
                            >
                                {albumTime(album.tracks)}
                            </td>
                        </tr>
                        <tr className={style.mobileHide}>
                            <td></td>
                            <td className={style.secondaryInfo}>
                                {album.meta.tags.join(', ')}
                            </td>
                        </tr>
                        <tr className={style.mobileHide}>
                            <td></td>
                            <td>
                                <a className={style.shareLink}>
                                    <svg
                                        className={style.icon}
                                        viewBox="0 0 24 24"
                                    >
                                        <use xlinkHref="#icon-share" />
                                    </svg>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <ul className={style.description}>
                                    {descriptionRows.map(row => (
                                        <li key={row}>{row}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
