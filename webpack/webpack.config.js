const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: 'cheap-module-eval-source-map',
    entry: {
        browse: 'entries/main.js'
    },
    output: {
        path: path.join(__dirname, '..'),
        publicPath: '/bundle/',
        filename: '[name].js'
    },
    resolve: {
        root: path.resolve(__dirname + '/../app'),
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.s?css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    stats: { colors: true }
};