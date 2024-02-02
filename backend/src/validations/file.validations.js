const Joi = require("joi");

const fileValidationSchema = Joi.object().keys({
  file: Joi.required(),
});

module.exports = { fileValidationSchema };
