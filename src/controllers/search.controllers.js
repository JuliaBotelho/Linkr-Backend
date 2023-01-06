import { connection } from "../database/server.js";
import userNameSchema from "../models/search.schema.js";

export async function searchUser(req, res) {
  const { userName } = req.body;

  console.log(userName)

  const { error } = userNameSchema.validate(userName, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  try {
    const users = await connection.query(
      `SELECT u.id, u."userName", u.picture FROM users u WHERE "userName" LIKE $1;`,
      [`${userName}%`]
    );

    res.status(200).send(users.rows);
  } catch (err) {
    res.status(500).send(err);
  }
}
