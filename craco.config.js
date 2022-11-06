const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = {
  webpack: {
    plugins: [
      new InjectManifest({
        swSrc: './src/service-workers.js',
        swDest: 'service-workers.js',
      })
    ],
    eslint: {
      configFile: './.eslintrc',  //your .eslintrc file 
      emitWarning: true
    }
  }
};