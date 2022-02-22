import 'babel-polyfill';
import '@babel/register';
import path from 'path';
import Koa from 'koa';
import logger from 'koa-logger';
import Pug from 'koa-pug';
import Router from 'koa-router';
import koaStatic from 'koa-static';
// import favicon from 'koa-favicon';
// import koaWebpack from 'koa-webpack';
import addRoutes from './routes';

const app = new Koa();

app.use(koaStatic(path.join(__dirname, 'app')));

// const hotClientConfig = {
  // hotClient: process.env.NODE_ENV === 'development' ? {} : false,
// };

// const projectRoot = __dirname;

// const staticRoot = path.join(__dirname, 'app');

const pug = new Pug({
  viewPath: path.resolve(__dirname, '../views'),
  debug: true,
  pretty: true,
  compileDebug: true,
  // basedir: path.resolve(__dirname, '../views'),
  // app: app,
});

pug.use(app);
// koaWebpack(hotClientConfig)
  // .then((middleware) => {
    // app.use(middleware);
  // });

const router = new Router();
addRoutes(router);

app
.use(logger())
.use(async ctx => {
    await ctx.render('index');
});

app.listen(3000);
