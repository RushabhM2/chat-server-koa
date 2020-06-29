const Koa = require('koa');
const app = new Koa();
const router = require('./router/router');
const koaBody = require('koa-body');

const serve = require('koa-static');

//const path = require('path');
app.use(serve('./public'));
app.use(koaBody());
app.use(router.routes());

app.listen(3078, () => {
  console.log(`connected http://localhost:3078`);
})