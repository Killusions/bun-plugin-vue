import app from './index.html';

const server = Bun.serve({
  development: true,
  routes: {
    '/': app
  }
})

console.log(`Server running at http://localhost:${server.port}`);
