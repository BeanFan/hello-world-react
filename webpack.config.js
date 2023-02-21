const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/configStore.js"),
    output: {
        clean:true,
        filename: "[name][hash].js",
        path: path.resolve(__dirname, "public"),
        chunkFilename: "[name]_[chunkhash:4]_chunk.js"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node-modules/,
                    loader: "babel-loader"
            },
            {
                test:/\.css/,
                use:[
                        // / "style-loader",// write style to style element in html
                         MiniCssExtractPlugin.loader,
                        "css-loader"
                         
                    ]
                

            }
        ]
    },
    optimization:{
        minimizer:[new cssMinimizerWebpackPlugin()], //压缩css文件,
        // minsize:60000,
        splitChunks:{
            cacheGroups: {
                commons: {
                  test: /[\\/]node_modules[\\/]/,
                  name:"vendor",  
                  // cacheGroupKey here is `commons` as the key of the cacheGroup
                  chunks: 'all',
                },
              },
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
        }),
        new MiniCssExtractPlugin({ // build css to 1 separated css file, need add config to modules>rules>loader or use
            filename:"[name][hash].css"
        }),
        // new BundleAnalyzerPlugin()
       
    ],
    devtool:'source-map',
    devServer:{
        port:9000,
    }

}