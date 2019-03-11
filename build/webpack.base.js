const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //打包vue
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin'); //Webpack 默认提供的 UglifyJS 插件，由于采用单线程压缩，速度颇慢 ；推荐采用 webpack-parallel-uglify-plugin 插件
const PurifyCss = require('purifycss-webpack'); // 引入PurifyCss
const ProgressBarPlugin = require('progress-bar-webpack-plugin'); //进度展示
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); //友好错误提示
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const setIterm2Badge = require('set-iterm2-badge');
const ManifestPlugin = require('webpack-manifest-plugin') //服务端生成性能配置文件
const glob = require('glob-all');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); //打包速度分析
const smp = new SpeedMeasurePlugin();
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default; //代码求值
const port = '3001';
const configuration = {};
setIterm2Badge(port);
//const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
// const webpackConfig = smp.wrap({
//     plugins: [
//       new VueLoaderPlugin()
//     ]
//   });
module.exports = {
    //打包模式
    mode: "development",
    //入口文件
    entry: {
        main: "./src/main.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0 // This is example is too small to create commons chunks
                }
            }
        }
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    //输出文件
    output: {
        path: path.join(__dirname, "../assets"),
        publicPath: '/',
        filename: "scripts/[name].[chunkhash].js"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            // {
            //     test: /\.ext$/,
            //     use: ['cache-loader', ...loaders],
            //     include: path.resolve('src'),
            // },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                //exclude: [resolve('src/icons')],
                options: {
                  limit: 10000,
                  //name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                  //name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        //new PrepackWebpackPlugin(configuration),
        new ProgressBarPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBuildNotifierPlugin({
            title: "My Project Webpack Build",
            // logo: path.resolve("./img/favicon.png"),
            suppressSuccess: true
        }),
        new ManifestPlugin(),
        new ParallelUglifyPlugin({
            cacheDir: '.cache/',
            uglifyJS: {
                output: {
                    comments: false
                },
                compress: {
                    warnings: false
                }
            }
        }),
        // new PurifyCss({
        //     paths: glob.sync([ // 传入多文件路径
        //         path.resolve(__dirname, '../src/*.vue'), // 处理根目录下的html文件
        //         path.resolve(__dirname, '../assets/*.js') // 处理src目录下的js文件
        //     ])
        // }),
        new HtmlWebpackPlugin({
            filename: './../views/index.html', //指定输出路径和文件名（相对js的路径）
            template: './src/index.html' //指定要打包的html路径和文件名	
        }),
        new VueLoaderPlugin(),
        // 每次build清除多余的文件
        new CleanWebpackPlugin([
            'assets'
        ], {
            root: path.join(__dirname, "../")
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "styles/[id].css"
        }),
        //预渲染配置
        // new PrerenderSPAPlugin({
        //     // 生成文件的路径，也可以与webpakc打包的一致。
        //     // 下面这句话非常重要！！！
        //     // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
        //     staticDir: path.join(__dirname, '../dist'),

        //     // 对应自己的路由文件，比如index有参数，就需要写成 /index/param1。
        //     routes: ['/', '/new'],

        //     // 这个很重要，如果没有配置这段，也不会进行预编译
        //     renderer: new Renderer({
        //         inject: {
        //           foo: 'bar'
        //         },
        //         headless: false,
        //         // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
        //         renderAfterDocumentEvent: 'render-event'
        //     })
        // })
    ]

}