const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TarserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const SVGSpriteMapPlugin = require('svg-spritemap-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const optimization = () => {
    const config = {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    };

    if(!isDev){
        config.minimizer = [
            //new TarserWebpackPlugin(),
            new OptimizeCssAssetsPlugin()
        ]
    }

    return config
};


module.exports = {

    context: path.resolve(__dirname, 'src'), // указываем в какой папке лежат все файлы (проект)
    entry: {
        app: './index.js', // откуда забрать все настройки (index.js)
    },
    output: {
        filename: './assets/js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist') // куда сложить готовый app.js
    },
    externals: '/node_modules/',
    devtool: "cheap-module-eval-source-map",
    optimization: optimization(),
    plugins:[
        new SVGSpriteMapPlugin({
            input:{
                options: {
                    src:'./assets/img/*.svg'
                }
            },
            output: {
                filename: 'spritemap.svg',
                svg4everybody:{
                    polyfill: true
                },
                svg:{
                    sizes: true
                }
            },
            sprite:{
                prefix:false,
                generate:{
                    title:false
                }
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './catalog.html',
            filename: 'catalog.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './index.html',
            filename: 'index.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './detail.html',
            filename: 'detail.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './basket.html',
            filename: 'basket.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './basket-2.html',
            filename: 'basket-2.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './basket-3.html',
            filename: 'basket-3.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './basket-3-1.html',
            filename: 'basket-3-1.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './basket-4.html',
            filename: 'basket-4.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './personal.html',
            filename: 'personal.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './orders-3.html',
            filename: 'orders-3.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './orders.html',
            filename: 'orders.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './orders-1.html',
            filename: 'orders-1.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './orders-2.html',
            filename: 'orders-2.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new HTMLWebpackPlugin({ // создает index.html в dist с подключеныйми js c hash
            template: './info.html',
            filename: 'info.html',
            minify:{
                collapseWhitespace: false
            }
        }),
        new CleanWebpackPlugin(), // чистим папку dist от js c hash
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets/img', to: 'assets/img' },
                { from: 'assets/fonts', to: 'assets/fonts' }
            ],
        }),
        new webpack.ProvidePlugin({ // без этого не будет работать owl.caruosel
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },{
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            name: '[name].[ext]',
                            sourceMap: true
                        },
                    }, 'css-loader']
            },{
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            name: '[name].[ext]',
                            exclude: '/node_modules/',
                            sourceMap: true

                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },{
                test: /\.(png|jpg|gif|svg)$/,
                exclude: '/node_modules/',
                use:{
                    loader: 'file-loader',

                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/img',
                    },
                }
            },{
                test: /\.(woff(2)?|ttf|eot|otf)$/,
                use:{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/fonts',
                    },
                }
            }
        ]
    }
};