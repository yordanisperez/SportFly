/** @type {import('webpack').Configuration} */

const {  merge } = require('webpack-merge')
const common = require('./webpack.common')
const Dotenv = require('dotenv-webpack');

const prod_config={
    devtool: 'source-map',//eval or eval-source-map or source-map recomendado para production
    mode: 'production', //production or development
    optimization:{
        moduleIds: 'deterministic',
        splitChunks:{
            chunks:"all",

             
        },
        runtimeChunk: 'single',
    },
    plugins:[
      
 new Dotenv({ignoreStub:false, path:'./production.env'}),
    ],
}
module.exports =merge(common,prod_config);
