// https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
// feito com a ajuda do BISSI GOSTOSO E DO LENON O MAIS BRABO APENAS
const errorHandlerMiddleware = (err, _req, res, _next) => {
  const { message, http } = err;
  if (err.name === 'ValidationError') res.status(400).json({ message: err.message });
  res.status(http || 500).json({ message });
};

module.exports = errorHandlerMiddleware;