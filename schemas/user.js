var Joi = require('joi');
// module.exports.schema  = Joi.object().keys({  
//   email: Joi.string().email().required(),
//   username: Joi.string().alphanum().min(3).max(30).required(),
//   password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
//   access_token: [Joi.string(), Joi.number()],
//   birthyear: Joi.number().integer().min(1900).max((new Date()).getFullYear()),
// });



const schema = Joi.object({ 
  name: Joi.string() .min(6) .required(),
  email: Joi.string() .min(6) .required() .email(),
  password: Joi.string() .min(6) .required() 
});
  
exports.validateUser = async (record)=>{
  try {
    const value = await schema.validateAsync(record);
    return value
  }
  catch (err) {
    return err
  }
  const validation = schema.validate(record);
  res.send(validation)
}
