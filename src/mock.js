import axios from "axios";

var MockAdapter = require("axios-mock-adapter");
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock GET request to /users when param `searchText` is 'John'
// arguments for reply are (status, data, headers)
mock.onGet("http://admin.localwobiz.com/login").reply(config => {
  var data = config;
  const email = "test@test.com";
  const password = "123456";

  if (data.params.email === email && data.params.password === password) {
    return [
      200,
      {
        token: "ba7c2cf6c55e3e382f2f48231aafc6b8725d723b",
        expires: 1567619449,
        user_id: 21432
      }
    ];
  }

  if (data.params.email !== email) {
    return [
      401,
      {
        success: false,
        code: 108,
        message: "Wrong username"
      }
    ];
  }

  if (data.params.password !== password) {
    return [
      401,
      {
        success: false,
        code: 106,
        message: "Wrong password for user"
      }
    ];
  }
});

export default mock;
