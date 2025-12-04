import React from 'react';
import type { Album } from '../models/tracks';
import { yearDescriptionForAlbum } from '../view-helpers/album';
import { albumTime } from '../view-helpers/time';

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
        <div className="album_header__container">
            <div className="album_header__imageContainer">
                <img
                    src={`/media/images/${
                        album.meta.coverImage || album.meta.slug
                    }.webp`}
                    alt={`${album.meta.title} by ${album.meta.artist} album cover`}
                    className="album_header__coverImage"
                    loading="lazy"
                />
                <div className="album_header__albumCoverOverlay">
                    <svg viewBox="0 0 24 24">
                        <use
                            xlinkHref="#icon-pause"
                            className="album_header__iconPause"
                        />
                        <use
                            xlinkHref="#icon-play"
                            className="album_header__iconPlay"
                        />
                    </svg>
                </div>
            </div>
            <div className="album_header__infoContainer">
                <table className="album_header__table">
                    <tbody>
                        <tr>
                            <td>
                                <h3>{album.meta.title}</h3>
                            </td>
                            <td className="album_header__secondaryInfo album_header__mobileHide">
                                {yearDescriptionForAlbum(album)}
                            </td>
                        </tr>
                        <tr>
                            <td>{album.meta.artist}</td>
                            <td className="album_header__secondaryInfo album_header__mobileHide">
                                {albumTime(album.tracks)}
                            </td>
                        </tr>
                        <tr className="album_header__mobileHide">
                            <td></td>
                            <td className="album_header__secondaryInfo">
                                {album.meta.tags.join(', ')}
                            </td>
                        </tr>
                        <tr className="album_header__mobileHide">
                            <td></td>
                            <td>
                                <a className="album_header__shareLink">
                                    <svg
                                        className="album_header__icon"
                                        viewBox="0 0 24 24"
                                    >
                                        <use xlinkHref="#icon-share" />
                                    </svg>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <ul className="album_header__description">
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
