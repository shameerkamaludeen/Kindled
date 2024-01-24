const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: getEntryObj(),
  // Use "getHtmlTemplateObjArray().concat([])" statement to add more plugins
  plugins: getHtmlTemplateObjArray(),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    chunkFilename: 'scripts/[name].chunk.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash][ext][query]'
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: './scripts/runtime',
    },
  },
};

function getHtmlTemplateObjArray() {
  return [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main'],
      filename: 'pages/about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/services.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main'],
      filename: 'pages/services.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/team.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main'],
      filename: 'pages/team.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/portfolio.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main'],
      filename: 'pages/portfolio.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/contact.html',
      chunks: ['bootstrap-plugins', 'plugins', 'main'],
      filename: 'pages/contact.html'
    })
  ];
}

function getEntryObj() {
  return {
    'bootstrap-plugins': {
      import: './src/scripts/bootstrap-plugins.js',
      filename: './scripts/[name].js'
    },
    plugins: {
      import: ['./src/scripts/scroll-smoother.min.js'],
      filename: './scripts/[name].js'
    },
    main: {
      import: ['./src/scripts/main.js'],
      filename: './scripts/[name].js'
    },
  };
}