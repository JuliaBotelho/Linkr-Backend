import { signInSchema, signUpSchema } from "../Schemas/UsersSchema.js";

export async function signUpMiddleware(req, res, next) {
  const user = req.body;
  const { error } = signUpSchema.validate(user, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(422).send(errors);
    return;
  }
  next();
}

export async function signInMiddleware(req, res, next) {
  const user = req.body;
  const { error } = signInSchema.validate(user, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(422).send(errors);
    return;
  }
  next();
}
