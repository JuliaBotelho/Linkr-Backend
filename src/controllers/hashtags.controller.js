import { connection } from "../database/server.js";

export async function getRankingHashtags(req, res) {
  try {
    const rankHashtags =
      await connection.query(`SELECT hashtag FROM hashtags  ORDER BY "counter" DESC
    LIMIT 10; `);
    res.status(200).send(rankHashtags.rows);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}
