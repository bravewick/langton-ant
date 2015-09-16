module.exports = {
    entry: "./renderer.js",
    output: {
        path: "bundle",
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }
      ]
    }
};
