import { join } from 'node:path';

const server = Bun.serve({
    port: 3000,
    routes: {
        '/': req => {
            return new Response(
                Bun.file(join(import.meta.dirname, '/static/index.html')),
                {
                    headers: { 'Content-Type': 'text/html' },
                }
            );
        },
        '/app.js': async req => {
            const build = await Bun.build({
                entrypoints: [
                    join(import.meta.dirname, 'components/index.tsx'),
                ],
            });

            return new Response(build.outputs[0], {
                headers: { 'Content-Type': 'application/javascript' },
            });
        },
        '/style.css': async req => {
            const build = await Bun.build({
                entrypoints: [join(import.meta.dirname, 'static/index.css')],
            });

            return new Response(build.outputs[0], {
                headers: { 'Content-Type': 'text/css' },
            });
        },
    },
});

console.log(`Server running at ${server.url}`);
