const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // ou 'development' dependendo do ambiente
  entry: './server.js', // Entrada do seu código
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      path: false, // Configura o polyfill para o módulo 'url'
      buffer: require.resolve('buffer/')
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Carregar arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Arquivo HTML base
    }),
  ],
};
