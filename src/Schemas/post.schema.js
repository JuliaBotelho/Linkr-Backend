import Joi from "joi";

export const postSchema = Joi.object({
    text: Joi.string(),
    link: Joi.string().uri().required(),
});
