import vuePlugin from '../../src/index';

Bun.build({
  entrypoints: ['index.html'],
  plugins: [vuePlugin()],
  outdir: 'dist',
})
