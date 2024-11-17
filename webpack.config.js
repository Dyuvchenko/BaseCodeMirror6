const path = require('path');

module.exports = {
    entry: './app/CodeMirror.jsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'), // Директория, в которой будет
        // размещаться итоговый бандл, папка dist в корне приложения
        clean: true, // Очищает директорию dist перед обновлением бандла
        // Свойство стало доступно с версии 5.20.0, до этого использовался
        // CleanWebpackPlugin
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ],
    }
}