const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

const optimization = merge(common.optimization, {
  minimizer: [
    `...`,
    new CssMinimizerPlugin({
      exclude: /(\.min\.)/
    }),
  ],
});

common.plugins.push(
  new MiniCssExtractPlugin({
    filename: "styles/[name].[contenthash].css",
    chunkFilename: "styles/[id].[contenthash].css",
  })
);

common.module.rules.push(
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        // Extracts CSS for each JS file that includes CSS
        loader: MiniCssExtractPlugin.loader,
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
    ],
  }
);

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: optimization
});