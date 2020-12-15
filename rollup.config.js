import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const banner = `/**
 * Vuemik ${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`;

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      banner,
    },
    {
      file: pkg.module,
      format: 'es',
      banner,
    },
  ],
  external: [
    'vue'
  ],
  plugins: [
    vue({
        compileTemplate: true,
        target: 'browser'
    }),
    typescript({
      typescript: require('typescript'),
    }),
  ],
};
