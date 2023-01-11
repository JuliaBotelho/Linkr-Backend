import { connection } from "../database/server.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function infoUser(req, res) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  try {
    const userInfos = await connection.query(
      "SELECT * FROM users WHERE token=($1);",
      [token]
    );
    res.status(200).send(userInfos.rows);
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}

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
    const posts = await connection.query(
      `SELECT u."userName" AS name, u.picture, u.id AS "userId", p.id,
      p.description AS text, p.link, p.title, p.preview, p.pic
      FROM posts p
      JOIN users u
      ON u.id = p."userId"
      WHERE p."userId" = $1;`,
      [id]
    );

    const user = await connection.query(
      `SELECT u."userName" AS name, u.picture, u.id AS "userId"
      FROM users u
      WHERE u.id = $1;`,
      [id]
    );

    const userPosts = {
      posts: posts.rows,
      user:user.rows
    }

    res.status(200).send(userPosts);
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
      res.status(200).send({ id: loginTest.rows[0].id, token });
    } else {
      return res.status(401).send("E-mail ou senha incorreto");
    }
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}
