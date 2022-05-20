import * as Joi from 'joi';

export default Joi.object({
  name: Joi.string().empty('').min(3).required(),
  status: Joi.string().valid('pendente', 'em andamento', 'pronto').required(),
}).messages({
  'any.required': '400|All fields must be filled',
  'any.only': '401|"status" accepted: pendente, em andamento, pronto',
  'string.base': '401|Incorrect name or status',
  'string.min': '401|"name" has to be greater than 2 characters',
});