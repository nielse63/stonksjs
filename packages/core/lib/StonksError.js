class StonksError extends Error {
  constructor({ code = 0, message = '' }) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

module.exports = StonksError;
