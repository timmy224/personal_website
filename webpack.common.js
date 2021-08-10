const Webpack = require("webpack");
module.exports = {
  entry: {
    vendor: "./src/vendor.js",
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif|pdf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // This config allows to use jQuery $ sign
  plugins: [
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
