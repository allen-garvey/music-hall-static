import React from 'react';
import { createRoot } from 'react-dom/client';
import { Page } from './page';
import { albums } from '../models/tracks.ts';

// check album query param
const urlParams = new URLSearchParams(window.location.search);
const albumSlugParam = urlParams.get('album');
const album = albums.find(album => album.meta.slug === albumSlugParam);
let activeAlbums = albums;
let homeUrl = 'https://allengarvey.com';
if (album) {
    activeAlbums = [album];
    homeUrl = '/';

    // check track query param
    const trackSlugParam = urlParams.get('track');
    const filteredTracks = album.tracks.filter(
        track => track.filename === trackSlugParam
    );
    if (filteredTracks.length > 0) {
        album.tracks = filteredTracks;
    }
}

const root = createRoot(document.getElementById('app'));
root.render(<Page homeUrl={homeUrl} albums={activeAlbums} />);
