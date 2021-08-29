/** @type {import('webpack').Configuration} */
const path=require("path")

const htmlWebpackPlugin =require('html-webpack-plugin');
const miniCssExtractPlugin=require('mini-css-extract-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');


module.exports ={
  

    devServer:{
        port:3000
    },
    entry: 
        {

            main: 
            {
                import: './src/index.js',
             //   filename: '../build/[name].[contenthash].js',
                dependOn:['vendor_react','vendor_auth0','vendor_materialui'],
            },
            vendor_react:{
              import:['react', 'react-dom','react-router-dom'],
            //  filename:'../build/[name].js',
          }
          
          ,
            vendor_auth0:{
              import:['@auth0/auth0-react'],
               // filename:'../build/[name].js'
            },
            
             vendor_materialui:{
              import:['@material-ui/core','@material-ui/icons'],
            }
        },

   output:{
        path:path.resolve(__dirname,'../build'),
        filename: '[name][contenthash].js',
        publicPath:"",
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [miniCssExtractPlugin.loader, "css-loader"],
          },
          {
              test:/.scss$/,
              use:
              [
                     {
                      loader:miniCssExtractPlugin.loader
                     }, 
                    {
                     loader:"css-loader" ,
                    
                    },
                    {
                      loader:"sass-loader",
                     
                    }
                ]
          },
          {
              test:/\.(js|jsx)$/,
              use:{
              loader:'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                   /* [
                      'babel-plugin-import',
                      {
                        'libraryName': '@material-ui/core',
                        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                        'libraryDirectory': '',
                        'camel2DashComponentName': false
                      },
                      'core'
                    ],
                    [
                      'babel-plugin-import',
                      {
                        'libraryName': '@material-ui/icons',
                        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                        'libraryDirectory': '',
                        'camel2DashComponentName': false
                      },
                      'icons'
                    ],*/
                   
                    [
                        'babel-plugin-transform-imports',
                        {
                          '@material-ui/core': {
                            // Use "transform: '@material-ui/core/${member}'," if your bundler does not support ES modules
                            'transform': '@material-ui/core/${member}',
                            'preventFullImport': true
                          },
                          '@material-ui/icons': {
                            // Use "transform: '@material-ui/icons/${member}'," if your bundler does not support ES modules
                            'transform': '@material-ui/icons/${member}',
                            'preventFullImport': true
                          }
                        }
                      ]
                  ]
              }
            } ,            
              exclude:/node_modules/, 

              
          },
          {
              type:"asset",
              test:/\.(png|svg|jpg|jpeg|gif|ico)$/i,
             // include: path.resolve(__dirname, '../src'),
              exclude:/node_modules/, //path.resolve(__dirname, '../node_modules'),
          }
        ], 

      },
    plugins:[new htmlWebpackPlugin({
        template:'./src/index.html',
        favicon: './src/LogoPalomaOpt.svg'
    }),
    new miniCssExtractPlugin({
        filename:'bundle.css',
    }),
    new CleanWebpackPlugin(),


    ],
    resolve:{
        extensions:['.js','.jsx','.json'],
    },
}