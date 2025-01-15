const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node', // Define o alvo como Node.js
    entry: './src/server.js', // Entrada do seu código Node.js
    output: {
        filename: 'bundle.js', // Nome do arquivo de saída
        path: path.resolve(__dirname, 'dist'), // Diretório de saída
    },
    externals: [webpackNodeExternals()], // Exclui módulos node_modules do bundle
    mode: 'production', // Modo de produção
};
