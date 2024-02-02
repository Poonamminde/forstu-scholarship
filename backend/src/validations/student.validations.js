const Joi = require("joi");

const studentValidationSchema = Joi.object().keys({
  email: Joi.string().required(),
  gender: Joi.required(),
  annual_income: Joi.number().required(),
  academic_marks: Joi.number().required(),
  disability: Joi.string().default("no"),
  category: Joi.string().required(),
  scholarship: Joi.string().default(""),
});

module.exports = { studentValidationSchema };
