const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  context: path.resolve(__dirname,'src'), 
  mode:'development',
  entry: {
      main:'./js/index.js'
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',    
  },
  plugins:[
      new HTMLWebpackPlugin({
          title:'Waxom|Site',
          filename:'./index.html',
          template:'./index.html'
      }),
      new HTMLWebpackPlugin({
          title:'Waxoms|Catalog',
          filename:'./catalog.html',
          template:'./catalog.html'
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin()
  ],
  module:{
      rules:[
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use:[
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images' // Chage this like 'public/images' or any other relative path to the root
                    }
                }
            ]
            
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            use:[
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts' // Chage this like 'public/images' or any other relative path to the root
                    }
                }
            ]
          },
          {
            test: /\.vue$/,
            use: ['vue-loader']
          },
      ]
  }
};
