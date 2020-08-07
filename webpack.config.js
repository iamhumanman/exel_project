const path = require('path') //встроенный модуль позволяющий комфортно работать с путями
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const fileName = ext => isDev ? `boundle.${ext}` : `boundle.[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development', //собираем все в режиме разработки
    entry: ['@babel/polyfill', './index.js'], //входной файл приложения
    output: {
        filename: fileName('js'),
        path: path.resolve(__dirname, 'dist')
    }, //куда вебпак собирает проект, filename - название файла, path - путь файла
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    devtool: isDev ? 'sourse-map' : false,
    devServer: {
        port: 3000,
        hot: isDev
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify : {
                removeComments: isProd,
                collapseWhitespace: isProd
            }
        }),
        new CopyPlugin({
            patterns: [
              { 
                from: path.resolve(__dirname, 'src/favicon.ico'), 
                to: path.resolve(__dirname, 'dist') 
            },
            ],
          }),
          new CleanWebpackPlugin(),
          new MiniCssExtractPlugin({
               filename: fileName('css')
          })
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev,
                        reloadAll: true
                    }
                },
              'css-loader',
              'sass-loader',
            ],
          },
          { 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
          },
        ],
      },
}