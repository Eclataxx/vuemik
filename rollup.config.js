import typescript from 'rollup-plugin-typescript2';
import vuePlugin from 'rollup-plugin-vue';

import pkg from './package.json';

const banner = `/**
 * Vuemik ${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`;

const globals = {
  vue: 'Vue',
}

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      banner,
      globals,
    },
    {
      file: pkg.module,
      format: 'es',
      banner,
      globals,
    },
  ],
  external: [
    'vue'
  ],
  plugins: [
    typescript(),
    vuePlugin(),
  ],
};
