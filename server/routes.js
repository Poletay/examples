import _ from 'lodash';

export default (router) => {
  return router
    .get('root', '/', (ctx) => {
      ctx.render('index', { Title: 'НИЧЁСИ!!!'});
    })
    .get('/users', (ctx) => {
      ctx.render('index', { Title: 'ЮЗЕРС ХУЛЕ!!!'});
    });
}
