const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");
const { dirname } = require("path");
const { getMaxListeners } = require("process");
const fs = require("fs");

const isExcludeModule = (modulePath)=>{
    const isNodeModules = /node_modules/.test(modulePath);
    const isNotMyModule = !/sub-inject-reducer/.test(modulePath);
    if(!isNotMyModule){
        // console.log(modulePath,"-------");
    }
    return isNodeModules && isNotMyModule;

}

const webpackConfig  = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
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
                exclude: isExcludeModule,
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
                // extractCSS:{
                //      test:isExcludeModule,
                //      name:"main"
                // },
                commons: {
                //   test: /[\\/]node_modules[\\/]/,
                  test:isExcludeModule,  
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
        })//,
        // new BundleAnalyzerPlugin()
       
    ],
    devtool:'source-map',
    devServer:{ 
        port:9000,
    },
    // snapshot: {
    //     managedPaths: [
    //       /^(.+?[\\/]node_modules[\\/](?!(sub-inject-reducer))(@.+?[\\/])?.+?)[\\/]/,
    //     ], // hot load matched path in node_modules
    // },
    resolve:{
        modules:[path.resolve(__dirname,"dev_modules"),"node_modules"],
        // add other modules path, you can add this config to replace the repos in node_modules by add it in dev_modules
    },
    
    watchOptions: {
        // ignored:  /^(.+?[\\/]node_modules[\\/](?!(sub-inject-reducer))(@.+?[\\/])?.+?)[\\/]/, // not work with regExp
        
        // ignored:  /^(.+?[\\/]node_modules[\\/](?!(sub-inject-reducer))(@.+?[\\/])?.+?)[\\/]/,
        
    },                                    

}

// an Option replace default path  for example you can use this replace some dependency ,
function getWebpackAlias(){
    if(fs.existsSync(path.resolve(__dirname,"dev_modules"))){
        if(!webpackConfig.resolve)
        {webpackConfig.resolve={};
        }
        const DevModules =fs.readdirSync(path.resolve(__dirname,"dev_modules"));
        console.log(DevModules);
        webpackConfig.resolve.alias = DevModules.reduce((result,current)=>{
            // console.log(item,lastValue);
             return {
                ...result, 
                [current]:path.resolve(__dirname,`dev_modules/${current}`)       
            }

        },{}); 
    }
    // }
}

// getWebpackAlias();
module.exports = webpackConfig;