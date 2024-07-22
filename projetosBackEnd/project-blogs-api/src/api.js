const express = require('express');
require('express-async-errors');
const middlewareError = require('./middlewares/middlewareError');
const loginRoute = require('./routes/loginRouter');
const userRoute = require('./routes/userRouter');
const categoryRoute = require('./routes/categoryRouter');
const post = require('./routes/postCategoryRouter');
// ...

const app = express();

app.use(express.json());
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/post', post);
app.use(middlewareError);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
