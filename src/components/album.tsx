import React from 'react';
import type { Album } from '../models/tracks';
import { AlbumHeader } from './album-header';

interface Props {
    album: Album;
}

export const AlbumComponent = ({ album }: Props) => {
    return (
        <div className="album_album">
            <AlbumHeader album={album} />
        </div>
    );
};
