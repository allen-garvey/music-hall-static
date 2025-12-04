import React from 'react';
import { createRoot } from 'react-dom/client';
import { Page } from './page';
import { albums } from '../models/tracks.ts';

const root = createRoot(document.getElementById('app'));
root.render(<Page homeUrl="https://allengarvey.com" albums={albums} />);
