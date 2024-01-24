const path = require('path')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const autoprefixer = require('autoprefixer');

common.module.rules.push(
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        // Extracts CSS for each JS file that includes CSS
        loader: 'style-loader',
      },
      {
        // Interprets `@import` and `url()` like `import/require()` and will resolve them
        loader: 'css-loader'
      },
      {
        // Loader for webpack to process CSS with PostCSS
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              autoprefixer
            ]
          }
        }
      },
      {
        // Loads a SASS/SCSS file and compiles it to CSS
        loader: 'sass-loader'
      }
    ]
  }
);

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
  },
});