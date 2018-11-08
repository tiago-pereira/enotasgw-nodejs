module.exports = {
  defaultResolve: function(data) {
    return Promise.resolve(data.data);
  },
  defaultReject: function(error) {
    return Promise.reject({
      message: error.message,
      code: error.code,
      data: error.response.data
    });
  }
}