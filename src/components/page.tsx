import React from 'react';
import type { Album } from '../models/tracks';
import { AlbumComponent } from './album';

interface Props {
    homeUrl: string;
    albums: Album[];
}

export const Page = ({ homeUrl, albums }: Props) => {
    return (
        <div className="page_container">
            <h1 className="page_title">
                <a href={homeUrl}>Allen Garvey</a>
            </h1>
            <p className="page_description">
                Selected musical compositions and recordings
            </p>
            {albums.map(album => (
                <AlbumComponent album={album} key={album.meta.title} />
            ))}
        </div>
    );
};
