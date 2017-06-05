const path = require('path')
const webpack = require('webpack')

const PORT = process.env.PORT || 3000

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      'babel-polyfill',
      './src/index.js',
    ],
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: `//localhost:${PORT}/`,
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'eslint-loader', options: { configFile: '.eslintrc' } },
        ],
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.sss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              importLoaders: 1,
              localIdentName: '[path][name]__[local]--[hash:base64]',
            },
          },
          'postcss-loader',
        ],
      },
      // fonts
      {
        test: /\.(otf|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: { name: '[name].[ext]', limit: 10000 },
      },
      // other files
      {
        test: /\.(eot|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]' },
      },
      // SVG font
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: [], // you can add font modules to here
        loader: 'file-loader',
        options: { name: '[name].[ext]' },
      },
      // favicon
      {
        test: /\.ico$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]' },
      },
      // images
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: { name: '[name].[ext]', limit: 10000 },
      },
    ],
  },
}
