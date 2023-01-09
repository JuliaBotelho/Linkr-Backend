import { connection } from "../database/server.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

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

export async function findUser(req, res) {
  const { id } = req.params;

  try {
    const user = await connection.query("SELECT * FROM users WHERE id=($1);", [
      id,
    ]);

    res.status(200).send(user.rows);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function userSignIn(req, res) {
  const { email, password } = req.body;
  try {
    const token = uuid();
    const loginTest = await connection.query(
      "SELECT * FROM users WHERE email=($1);",
      [email]
    );
    if (loginTest && bcrypt.compareSync(password, loginTest.rows[0].password)) {
      await connection.query("UPDATE users SET token = $1 WHERE email = $2", [
        token,
        loginTest.rows[0].email,
      ]);
      res.status(200).send(token);
    } else {
      return res.status(401).send("E-mail ou senha incorreto");
    }
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}
