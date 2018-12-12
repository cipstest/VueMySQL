const AuthCtrl = require("./controllers/authControl");
const AuthRules = require("./rules/authRules");
console.log(AuthRules);
module.exports = app => {
  app.post("/register", AuthRules.register, AuthCtrl.register);
};
