import { connection } from "../database/server.js";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
  const { email, password, username, picture } = req.body;
  try {
    const userDuplicity = await connection.query(
      "SELECT * FROM users WHERE email=($1);",
      [email]
    );
    if (userDuplicity.rowCount > 0) {
      return res.status(409).send("E-mail já existe!");
    }
    const newPassword = bcrypt.hashSync(password, 10);

    await connection.query(
      'INSERT INTO users (email, password,"userName",picture) VALUES ($1, $2, $3, $4);',
      [email, newPassword, username, picture]
    );
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}
