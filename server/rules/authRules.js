const joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = {
      email: joi.string().email(),
      password: joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
    };

    const { error, value } = joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "The email is invalid!"
          });
          break;
        case "password":
          res.status(400).send({
            error: "The password did not match the rules provided."
          });
          break;
        default:
          res.status(400).send({
            error: "Registration failed. Error code: ATH02_GENERAL"
          });
      }
    }
    if (!error) {
      next();
    }
  }
};
