const express = require('express');
const error = require('./middlewares/middlewareError');
const productRouter = require('./routes/productsRoutes');
const saleRouter = require('./routes/salesRoutes');

const app = express();

app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productRouter);
app.use('/sales', saleRouter);
app.use(error);

// não remova essa exportação, é para o avaliador funcionar!
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;