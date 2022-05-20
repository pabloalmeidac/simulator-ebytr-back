import * as Joi from 'joi';

export default Joi.object({
  status: Joi.string().valid('pendente', 'em andamento', 'pronto').required(),
}).messages({
  'any.required': '400|"status" is required',
  'any.only': '401|"status" accepted: pendente, em andamento, pronto',
  'string.base': '401|"status" it has to be a string',
});