export default router => router
  .get('root', '/', (ctx) => {
    ctx.render('index', { Title: 'Main page' });
  })
  .get('/users', (ctx) => {
    ctx.render('index', { Title: 'Users' });
  });
