import { join } from 'node:path';
import html from './static/index.html';

const server = Bun.serve({
    port: 3000,
    development: {
        hmr: false,
    },
    routes: {
        '/': html,
        '/media/images/:filename': req => {
            return new Response(
                Bun.file(
                    join(
                        import.meta.dirname,
                        '../public/media/images',
                        req.params.filename
                    )
                ),
                {
                    headers: { 'Content-Type': 'image/webp' },
                }
            );
        },
        '/media/music/:directory/:filename': req => {
            return new Response(
                Bun.file(
                    join(
                        import.meta.dirname,
                        '../public/media/music',
                        req.params.directory,
                        req.params.filename
                    )
                ),
                {
                    headers: { 'Content-Type': 'audio/opus' },
                }
            );
        },
    },
});

console.log(`Server running at ${server.url}`);
