
module.exports = {
    context: __dirname + '/src',
    entry: './js/client.js',
    output: {
        filename: 'client.js',
        path: __dirname + '/dist'
    },

   module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    }
}
