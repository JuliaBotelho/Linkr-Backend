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

export async function openHashtag(req, res) {
  const { hashtag } = req.params;
  try {
    const hashtagExist = await connection.query(
      `SELECT * FROM hashtags WHERE hashtag = $1`,
      [hashtag]
    );
    if (!hashtagExist) {
      res.status(404).send({ mesage: "hashtag não encontrada" });
    }
    const post = {
      hashtag: hashtagExist.rows[0].hashtag,
    };

    res.status(200).send(post);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}

export async function getPostHashtag(req, res) {
  const { hashtag } = req.params;

  try {
    const getPostsByHashtag = await connection.query(
      `SELECT users.id, users."userName", users.picture, posts."userId", posts.description, posts.link, posts.hashtag FROM users JOIN posts ON users.id = posts."userId"  WHERE hashtag = $1`,
      [hashtag]
    );

    res.status(200).send(getPostsByHashtag.rows);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}
