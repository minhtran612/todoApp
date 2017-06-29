import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';


import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';

import category from './routes/category';
import bookshelf from './bookshelf';

const compiler = webpack(webpackConfig);

let app = express();

app.use('/', express.static('./public'));
app.use(bodyParser.json());

app.use('/api/category', category);
app.use(webpackMiddleware(compiler,{
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

bookshelf.plugin('pagination')
app.get('/*', (req, res, next ) => {
    res.sendFile(path.join(__dirname,'./index.html'));
});

app.listen(process.env.PORT || 3000 , () => console.log('Running in port', process.env.PORT || 3000));