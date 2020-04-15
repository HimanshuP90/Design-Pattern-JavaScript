class Promise {
  constructor(executor) {
    // Error checking
    if (typeof executor !== " function ")
      throw TypeError(` Promise Resolver $ { Executor } IS Not A function `);
    this._init();
    executor(this.resolve, this.reject);
  }

  resolve(value) {
    if (this.state === " pending ") {
      this.state = " fulfilled ";
      this.value = value;
    }
  }

  reject(reason) {
    if (this.state === " pending ") {
      this.state = " rejected ";
      this.reason = reason;
    }
  }

  _init() {
    this.value = null;
    this.reason = null;
    this.state = " pending ";
  }
}

module.exports = {
  promise: Promise
};
