const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const lessConfig = {
  // cssModules: true,
  pageExtensions: ['jsx', 'js', 'ts'],
  lessLoaderOptions: {
    modifyVars: {
      'primary-color': '#7546c9',
      'link-color': '#7546c9',
      'text-color': '#333',
    },
    javascriptEnabled : true,
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
}
const cssConfig = {
}

if(typeof require !== 'undefined'){
  require.extensions['.css']=file=>{}
}

module.exports = withPlugins([
  [withLess, lessConfig],[withCss, cssConfig]
])