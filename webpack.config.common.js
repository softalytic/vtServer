var webpack = require('webpack');

module.exports = {
  entry: {
    'app':'./assets/app/main.ts'
  },
  resolve:{
    extensions: ['.js','.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      {
        test: /\.html$/,
        loaders: 'html-loader'
      },
      {
        test: /\.css$/,
        loaders: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      './src'

    )


  ]
};