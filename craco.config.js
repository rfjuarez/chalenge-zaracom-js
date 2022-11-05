const {InjectManifest} = require('workbox-webpack-plugin');
const { when, whenDev } = require("@craco/craco");

module.exports = {
    webpack: {
        plugins: [
            new InjectManifest({
                swSrc: './src/service-workers.js',
                swDest: 'service-workers.js',
            })
        ]
    }
};