import _ from 'lodash';

export default (router) => {
  return router
    .get('root', '/', (ctx) => {
      ctx.render('index', { Title: 'Main page'});
    })
    .get('/users', (ctx) => {
      ctx.render('index', { Title: 'Users'});
    });
}
