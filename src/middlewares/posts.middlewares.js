import { postSchema } from "../Schemas/post.schema.js"

export async function postValidation(req, res, next) {
    const post = req.body;
    const { error } = postSchema.validate(user, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        res.status(422).send(errors);
        return;
    }
}