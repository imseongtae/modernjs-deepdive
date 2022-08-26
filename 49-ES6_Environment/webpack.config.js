const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /**
   * entry file
   * @see https://webpack.js.org/configuration/entry-context/#entry
   */
  entry: './src/js/main.js',
  /**
   * 번들링된 js 파일의 이름(filename)과 저장될 경로(path)를 지정
   * @see https://webpack.js.org/configuration/output/#outputpath
   * @see https://webpack.js.org/configuration/output/#outputfilename
   */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  /** @see https://webpack.js.org/configuration/dev-server/ */
  devServer: {
    static: {
      /** @see https://webpack.js.org/configuration/dev-server/#directory */
      directory: path.join(__dirname, 'dist'),
    },
    /** @see https://webpack.js.org/configuration/dev-server/#devserveropen  */
    open: false,
    /** @see https://webpack.js.org/configuration/dev-server/#devserverport */
    port: 'auto',
  },
  /** @see https://webpack.js.org/configuration/module */
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/js')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // ↓ 추가 - @babel/plugin-transform-runtime
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  /** @see https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs */
                  corejs: 3,
                  proposals: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      // HtmlWebpackPlugin 함수의 인수에는 html 파일의 경로를 지정
      template: 'src/index.html',
    }),
  ],
  devtool: 'source-map',
  /** @see https://webpack.js.org/configuration/mode/#root */
  mode: 'development',
};
