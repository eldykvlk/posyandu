const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'pengumuman-page-user.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/pengumuman-page-user.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'pengumuman-page-admin.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/pengumuman-page-admin.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'tambah-admin.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/tambah-admin.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'masuk.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/masuk.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'hal-admin.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/hal-admin.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'user-chartkms.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/user-chartkms.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'admin-laporan.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/admin-laporan.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'ketua-laporan.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/ketua-laporan.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'user_login.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/user_login.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'new_dashboard.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/new_dashboard.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'hal-staf.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/hal-staf.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'staf_input.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/staf_input.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'user_info.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/user_info.html'),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'user_tambah.html',
      template: path.resolve(__dirname, 'src/scripts/views/pages/user_tambah.html'),
      inject: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
