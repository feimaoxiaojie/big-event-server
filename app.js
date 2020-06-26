//项目入口文件

//开启服务
const express = require('express');
const app = express();
app.listen(3007, () => console.log('big-event-server running~~~'));
1
//配置应用级别的中间件
//中间件，实现CORS跨域
const cors = require('cors');
app.use(cors());//这行代码的意思和下面的注释代码一个意思
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
// });

//中间件，接收urlencoded类型的请求体
app.use(express.urlencoded({ extended: false }));

//加载路由模块，并注册成中间件
let loginRouter = require('./routers/login');
let categoryRouter = require('./routers/category');
let articleRouter = require('./routers/article');
let userRouter = require('./routers/user');

app.use('/api', loginRouter);
app.use('/my/article', categoryRouter);
app.use('/my/article', articleRouter);
app.use('/api', userRouter);