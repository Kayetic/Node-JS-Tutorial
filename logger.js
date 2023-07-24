// Module Wrapper Function
(function (exports, require, module, __filename, __dirname) {
  const url = "http://mylogger.io/log";

  function log(message) {
    // Send a HTTP request
    console.log(message);
  }

  module.exports = log;
})(exports, require, module, __filename, __dirname);
