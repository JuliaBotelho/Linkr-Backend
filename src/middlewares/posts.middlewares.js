import { postSchema } from "../Schemas/post.schema.js"

export async function postValidation(req, res, next) {
    const post = req.body;

    const { error } = postSchema.validate(post, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();
}