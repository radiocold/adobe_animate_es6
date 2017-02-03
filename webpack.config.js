module.exports = {
  entry: './src/main.js',
  output: {
    filename: './deploy/bundle.js'
  },
    devtool: 'source-map',
    module: {
        loaders: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                    presets: ['es2015', 'stage-0']
                 }
            }
            
        ]
    }
};