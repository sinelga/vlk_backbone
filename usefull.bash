live-server --no-browser --entry-file=index.html

mkdir version_desk_react_00 && cd $_
npm init -y

npm install react react-bootstrap react-document-meta react-dom react-router --save
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

mkdir dist/img dist/fonts dist/styles src

cd ..
git add version_desk_react_00 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_desk_react_00  origin version_desk_react_00

cd version_desk_react_00



.babelrc
{
  "presets": [
    "es2015",
    "react"
  ],
  "plugins": [
  ]
}

webpack.config.js

var webpack = require('webpack');

module.exports = {
                entry: {
                    app: [ './src/app.js'],
                        vendor: ["react","react-router","react-bootstrap","react-document-meta"],
                  },
   output: {
     path: __dirname + '/dist/',
     filename: 'deskbundle.js',
     publicPath: '/'
   },
   module: {
     loaders: [
       { test: /\.js$/, loader: 'babel', exclude: [/node_modules/]  }
      ]
   },
   
   plugins: [
             new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.deskbundle.js")
           ]
};