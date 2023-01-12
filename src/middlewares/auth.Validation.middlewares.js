import { connection } from "../database/server.js";

export async function authRoutesValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    console.log("sem token");
    res.status(401).send("sem token");
    return;
  }

  try {
    const userResult = await connection.query(
      "SELECT * FROM users WHERE token = $1",
      [token]
    );

    if (userResult.rows.length == 0) {
      res.status(401).send("Token não existe");
      return;
    }
    res.locals.userId = userResult.rows[0].id;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}
