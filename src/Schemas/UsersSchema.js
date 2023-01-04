import joi from "joi";

export const signUpSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
  username: joi.string().required(),
  picture: joi.string().required(),
});
