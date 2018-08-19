import 'babel-polyfill';
import 'babel-core/register';
import path from 'path';
import Koa from 'koa';
import logger from 'koa-logger';
import Pug from 'koa-pug';
import Router from 'koa-router';
import favicon from 'koa-favicon';
import koaWebpack from 'koa-webpack';
import addRoutes from './routes';

const app = new Koa();

const hotClientConfig = {
  hotClient: process.env.NODE_ENV === 'development' ? {} : false,
};

const router = new Router();
const projectRoot = __dirname;
const staticRoot = path.join(projectRoot, 'app');

const pug = new Pug({
  viewPath: path.join(projectRoot, '../views'),
  debug: true,
  pretty: true,
  compileDebug: true,
  basedir: path.join(projectRoot, 'views'),
});

pug.use(app);
addRoutes(router);
koaWebpack(hotClientConfig)
  .then((middleware) => {
    app.use(middleware);
  });
app
  .use(logger())
  .use(favicon(path.join(staticRoot, 'img/favicon.png')))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
