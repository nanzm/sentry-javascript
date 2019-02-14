module.exports = {
  out: './docs/',
  readme: 'README.md',
  name: 'Sentry JavaScript SDKs',
  includes: './',
  exclude: [
    '**/test/**/*',
    '**/*.js',
    '**/dist/**/*',
    '**/esm/**/*',
    '**/packages/typescript/**/*',
    '**/packages/raven-js/**/*',
    '**/packages/raven/**/*',
    '**/dangerfile.ts',
  ],
  mode: 'modules',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  'external-modulemap': '.*packages/([^/]+)/.*',
};