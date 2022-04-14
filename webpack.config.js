// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require( "path" );
const webpack = require( "webpack" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const SpeedMeasurePlugin = require( "speed-measure-webpack-plugin" );
const { BundleStatsWebpackPlugin } = require( 'bundle-stats-webpack-plugin' );


const smp = new SpeedMeasurePlugin( {
  outputTarget: 'dist/speed.json',
  outputFormat: 'json'
} );

const config = smp.wrap( {
  entry: "./src/index.js",
  output: {
    path: path.resolve( __dirname, "dist" ),
    clean: true
  },
  stats: {
    all: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new BundleStatsWebpackPlugin( {
      json: true,
      html: false,
    } )
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [ "style-loader", "css-loader" ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
} );

module.exports = config;
