# Bun Plugin Vue

A simple Vue plugin for [Bun](https://bun.sh) build, dev server etc. Made to be able to load SFC's into bun's bundler.

> [!IMPORTANT]
> This module is only compatible with the Bun Runtime.

- Script
- Script Setup
- Script with TS
- Styles
- Scoped Styles
- Template

## Installation

```bash
bun add -D @eckidevs/bun-plugin-vue
```

### Typing Vue

If you want to have Vue's types, add a `vue-shim.d.ts` file to the root of your project:

```ts
// vue-shim.d.ts
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
```

## Usage

The following is a quickstart, but see the `examples` directory for full examples.

### In Bun Build

```ts
import vuePlugin from '@eckidevs/bun-plugin-vue'

Bun.build({
  // index.html Imports main.ts where App.vue is setup
  entrypoints: ['./index.html'], 
  outdir: './dist',
  plugins: [vuePlugin()],
})
```

### In Bun Full-Stack Dev Server

First create the local plugin file:

```ts
// vue-plugin.ts
import vuePlugin from '@eckidevs/bun-plugin-vue'
export default vuePlugin()
```

Then update `bunfig.toml`

```ts
[serve.static]
plugins = ["./vue-plugin.ts"]
```

## Known Issues

You might encouter the following console message in the browser (in development):

- `Feature flags __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__, __VUE_PROD_HYDRATION_MISMATCH_DETAILS__`

This is because the `define` option in bun's config is not yet supported in the dev server. You could suppress it by adding in your HTML:

```html
<script>
globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
</script>
```

That is not the correct fix though, it needs to be replaced in the code at compile time.
This will be fixed in a future version of Bun.



