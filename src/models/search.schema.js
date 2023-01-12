import joi from "joi";

const userNameSchema = joi.object({
  userName: joi.string().min(3).required(),
});

export default userNameSchema;
