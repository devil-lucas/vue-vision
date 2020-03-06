export default class VisionError extends Error {
  constructor() {
    super();
    this.prefix = 'Vision';
  }

  throw(msg) {
    throw new Error(`${this.prefix}: ${msg}`);
  }
}
