const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  console.log('22')
  ctx.body = 'Hello koa';
});
app.listen(3000)
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});