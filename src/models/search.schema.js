import joi from "joi";

const userNameSchema = joi.string().min(3).required()

export default userNameSchema;
