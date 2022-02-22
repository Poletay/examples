export default router => router
  .get('root', '/', async (ctx) => {
    await ctx.render('index', { Title: 'Index Page'});
  })
  .get('/users', async (ctx) => {
    await ctx.render('index');
  });
