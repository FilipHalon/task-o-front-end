const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    cssModules: false
})

// Fixes npm packages that depend on `fs` module
// Great many thank to Mohammed Alrefai for making this work https://spectrum.chat/next-js/general/how-to-properly-load-font-awesome-pro-into-a-next-js-application~56b0396d-8b7d-447d-9f46-24ba6192936e
const nextConfig = { webpack: config => ({ ...config, node: { fs: 'empty' } }) }
