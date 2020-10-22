const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        script: './assets/js/script.js',
        prism: './assets/js/prism.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/built/'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                loaders: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('tailwindcss')('./tailwind.config.js'), // eslint-disable-line
                                require('autoprefixer'), // eslint-disable-line
                                require('@fullhuman/postcss-purgecss')({ // eslint-disable-line
                                    content: ['**/*.hbs'],
                                    defaultExtractor: (content) => content.match(/[\w-/:.]+(?<!:)/g) || [],
                                }),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
                loader: ['url-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'screen.css' })],
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
};
