const path = require('path') //встроенный модуль позволяющий комфортно работать с путями
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');





module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development', //собираем все в режиме разработки
    entry: './index.js', //входной файл приложения
    output: {
        filename: 'boundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    }, //куда вебпак собирает проект, filename - название файла, path - путь файла
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
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
               filename: 'boundle.[hash].css'
          })
    ],
}