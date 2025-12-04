import React from 'react';
import type { Album } from '../models/tracks';
import { AlbumComponent } from './album';

import style from './page.module.css';

interface Props {
    homeUrl: string;
    albums: Album[];
}

export const Page = ({ homeUrl, albums }: Props) => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>
                <a href={homeUrl}>Allen Garvey</a>
            </h1>
            <p className={style.description}>
                Selected musical compositions and recordings
            </p>
            {albums.map(album => (
                <AlbumComponent album={album} key={album.meta.title} />
            ))}
        </div>
    );
};
