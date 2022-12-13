// @ts-check

const path = require('path');
const fg = require('fast-glob');
const fs = require('fs');
const packageJSON = require('../package.json');

/* Rebase relative paths in components */
const files = fg.sync([
  'dist/**/*.{js,ts}',
  '!dist/icons/**/*.{js,ts}',
]);

files.map((file) => {
  const content = fs.readFileSync(file, 'utf-8');
  const newContent = content
    .replace(/\.\.\/icons/gu, 'icons')

  fs.writeFileSync(file, newContent);
});

/* Rebase relative paths for .d.ts files */
const dtsFiles = fg.sync([
  'dist/**/*.d.ts',
  '!dist/icons/**/*.d.ts',
]);

dtsFiles.map((file) => {
  const content = fs.readFileSync(file, 'utf-8');
  const newContent = content.replace(/\.\.\/types/gu, 'types');

  fs.writeFileSync(file, newContent);
});

/* Create new package.json */
const releasePackageJSON = {
  name: packageJSON.name,
  description: packageJSON.description,
  version: packageJSON.version,
  author: packageJSON.author,
  repository: packageJSON.repository,
  license: packageJSON.license,
  sideEffects: packageJSON.sideEffects,
  files: packageJSON.files,
  peerDependencies: packageJSON.peerDependencies,
  dependencies: packageJSON.dependencies,
  devDependencies: packageJSON.devDependencies,
  type: 'module',
  main: 'index.js',
};
const targetLocation = path.resolve('dist/package.json');

fs.writeFileSync(targetLocation, JSON.stringify(releasePackageJSON, null, 2));

/* Copy static files */
const staticFiles = ['CHANGELOG.md', 'README.md', 'yarn.lock'];
staticFiles.forEach((file) => {
  const source = path.resolve(file);
  console.log('staticFiles.forEach ~ source', source)
  const target = path.resolve(`dist/${file}`);

  fs.copyFileSync(source, target);
});
