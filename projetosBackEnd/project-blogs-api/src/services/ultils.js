// https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
// feito com a ajuda do BISSI GOSTOSO E DO LENON O MAIS BRABO APENAS
 class ErrorHttp extends Error {
  constructor(message, http) {
    super(message);
    this.http = http;
  }
}

module.exports = ErrorHttp;