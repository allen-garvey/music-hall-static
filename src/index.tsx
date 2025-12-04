import { join } from 'node:path';

import { renderToString } from 'react-dom/server';
import React from 'react';

import { Page } from './components/page.tsx';

const server = Bun.serve({
    port: 3000,
    routes: {
        '/': async req => {
            const indexHtml = await Bun.file(
                join(import.meta.dirname, '/static/index.html')
            ).text();
            return new Response(
                indexHtml.replace('{{react_output}}', renderToString(<Page />)),
                {
                    headers: { 'Content-Type': 'text/html' },
                }
            );
        },
        '/style.css': async req => {
            const build = await Bun.build({
                entrypoints: [join(import.meta.dirname, '/static/index.css')],
            });

            return new Response(build.outputs[0], {
                headers: { 'Content-Type': 'text/css' },
            });
        },
    },
});

console.log(`Server running at ${server.url}`);
