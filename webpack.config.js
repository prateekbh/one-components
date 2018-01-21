const path = require('path');
const fs = require('fs');

module.exports = {
  entry: {
    'button': __dirname + '/packages/button/button.js',
    'checkbox': __dirname + '/packages/checkbox/checkbox.js',
    'linear-progress': __dirname + '/packages/linear-progress/linear-progress.js',
    'radio': __dirname + '/packages/radio/radio.js',
    'slider': __dirname + '/packages/slider/slider.js',
    'snackbar': __dirname + '/packages/snackbar/snackbar.js',
    'dialog': __dirname + '/packages/dialog/dialog.js',
  },
  output: {
    path: path.resolve('./packages/'),
    filename: '[name]/one-[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'raw-loader'
      }
    ]
  }
}