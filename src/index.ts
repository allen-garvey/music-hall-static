import html from './static/index.html';

const server = Bun.serve({
    port: 3000,
    development: {
        hmr: false,
    },
    routes: {
        '/': html,
    },
});

console.log(`Server running at ${server.url}`);
