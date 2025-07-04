import { test, expect, spyOn } from 'bun:test';
import vuePlugin from '../src';
import * as components from './fixtures/components';

test('it builds', async () => {
  const numberOfComponents = Object.keys(components).length;
  expect.assertions(numberOfComponents * 2);

  for (const component in components) {
    const output = await Bun.build({
      // @ts-expect-error
      entrypoints: [components[component]],
      plugins: [vuePlugin()],
    })

    expect(output.outputs[0]!.size).toBeGreaterThan(0);
    expect(output.outputs[0]!.path).toBe(`./${component}.js`);
  }
})

test('fails on empty', async () => {
  const Empty = (await import('./fixtures/Empty.vue')).default;
  expect.assertions(2);

  const errorLogSpy = spyOn(console, 'error');

  expect(Bun.build({
    // @ts-expect-error
    entrypoints: [Empty],
    plugins: [vuePlugin()],
  })).rejects.toThrowError('Bundle failed');

  expect(errorLogSpy).toHaveBeenCalledWith(
    expect.stringContaining('[vue-plugin:error] Errors parsing')
  );
})
