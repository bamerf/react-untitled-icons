import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import analyze from 'rollup-plugin-analyzer';
import svg from 'rollup-plugin-svg';
import renameNodeModules from 'rollup-plugin-rename-node-modules';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import beep from '@rollup/plugin-beep';
import dts from 'rollup-plugin-dts';

import { DEFAULT_EXTENSIONS } from '@babel/core';

const pkg = require('./package.json');

const externalPackages = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const regexesOfPackages = externalPackages.map((packageName) => {
  return new RegExp(`^${packageName}(\/.*)?`);
});

const plugins = [
  beep(),
  json(),
  babel({
    babelHelpers: 'runtime',
    include: 'src',
    configFile: './.babelrc',
    extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
    exclude: [/node_modules/, '**/*.d.ts', '**/types.ts'],
  }),
  typescript({
    typescript: require('ttypescript'),
    useTsconfigDeclarationDir: false,
    tsconfig: './tsconfig.json',
    tsconfigOverride: {
      compilerOptions: {
        declaration: true,
        noEmit: true,
        outDir: 'build',
        rootDir: 'src',
        plugins: [{ transform: '@zerollup/ts-transform-paths' }],
      },
      include: ['**/**.ts', '**/**.tsx'],
      exclude: ['node_modules', 'dist', '**/**.stories.tsx'],
    },
  }),
  svg(),
  copy({
    targets: [
      {
        src: 'build/components/*',
        dest: 'build',
      },
    ],
    hook: 'writeBundle',
    flatten: true,
  }),
  del({
    targets: 'build/components',
    hook: 'closeBundle',
    onlyDirectories: true,
  }),
  renameNodeModules('__external'),
  analyze({
    summaryOnly: true,
    showExports: true,
  }),
];

/**
 * @type {import('rollup').RollupOptions}
 */
const icon_esm = {
  input: ['src/index.ts'],
  output: {
    dir: 'dist',
    sourcemap: false,
    esModule: true,
    exports: 'auto',
    interop: 'esModule',
    preserveModules: true,
    preserveModulesRoot: 'src',
    format: 'esm',
  },
  plugins,
  external: regexesOfPackages,
};

/**
 * @type {import('rollup').RollupOptions}
 */
const icon_types = {
  input: 'src/index.d.ts',
  output: {
    file: 'dist/types/index.d.ts',
    format: 'esm',
  },
  plugins: [dts()],
};

/**
 * @type {import('rollup').RollupOptions}
 */

export default [icon_esm];
