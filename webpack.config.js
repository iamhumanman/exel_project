const path = require('path') //встроенный модуль позволяющий комфортно работать с путями

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development', //собираем все в режиме разработки
    entry: './index.js', //входной файл приложения
    output: {
        filename: 'boundle.js',
        path: path.resolve(__dirname, 'dist')
    } //куда вебпак собирает проект, filename - название файла, path - путь файла
}