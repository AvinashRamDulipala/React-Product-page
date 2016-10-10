module.exports = {
  entry: "./app/js/components/main.js",
  output: {
    publicPath: '/dist/js',
    path: '/dist/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
