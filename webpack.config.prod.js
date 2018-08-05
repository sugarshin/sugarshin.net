const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ReactStaticPlugin = require('react-static-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname,

  entry: {
    app: [
      'babel-polyfill',
      './src/index.js',
    ],
  },

  output: {
    path: path.join(__dirname, 'build'),
    libraryTarget: 'umd',
    filename: '[name]-[hash].js',
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'app-[hash].css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      screw_ie8: true,
      compressor: { warnings: false },
    }),
    new ManifestPlugin(),
    new ReactStaticPlugin({
      routes: './src/routes/index.js',
      template: './Template.js',
      favicon: 'favicon.ico',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { minimize: true } }],
        }),
      },
      {
        test: /\.sss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
        }),
      },
      // fonts
      {
        test: /\.(otf|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: { name: '[hash].[ext]', limit: 10000 },
      },
      // other files
      {
        test: /\.(eot|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: '[hash].[ext]' },
      },
      // SVG font
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: [], // you can add font modules to here
        loader: 'file-loader',
        options: { name: '[hash].[ext]' },
      },
      // favicon
      {
        test: /\.ico$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]' },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: { name: '[hash].[ext]', limit: 10000 },
      },
      // Markdown for Page
      {
        test: /.*\/pages\/.+\.md$/,
        loader: 'raw-loader',
      },
    ],
  },
}
