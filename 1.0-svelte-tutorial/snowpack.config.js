module.exports = {
  mount: {
    'src': '/'
  },
  plugins: [
    ['@snowpack/plugin-svelte', {
      hmrOptions: {
        preserveLocalState: false,
      }
    }],
  ],

  packageOptions: {
    source: 'remote',
  },
};
