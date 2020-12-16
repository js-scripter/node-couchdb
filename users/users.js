var users = require('../couchdb').use('users');
var Joi = require('joi');
var Boom = require('boom')

const schema = Joi.object({ 
    name: Joi.string() .min(6) .required(),
    email: Joi.string() .min(6) .required() .email(),
    password: Joi.string() .min(6) .required(),
    _rev: Joi.string(),
    _id: Joi.string(),
});
exports.create = async function create(user) { 
    try{
        await schema.validateAsync(user);
    }catch(schemaErr){
        throw `statusCode: 400 , schemaError : ${schemaErr.details[0].message}`
    }    
    try{
        const result = await users.insert(user, user.email);
        return result
    }catch(insertErr){
        throw `statusCode : ${insertErr.statusCode}, dbError : ${insertErr.reason}`
    }
};

exports.update = async function update(user){
    try {
        await users.update(user)
    } catch (error) {
        console.log(error)
        throw `statusCode : ${error.statusCode}, dbError : ${error.reason}`
    }
}
