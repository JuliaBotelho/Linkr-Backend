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
    const getPost = await connection.query(
      `SELECT posts.id , posts."userId",posts.description,posts.link ,users."userName", users.picture  FROM posts 
      JOIN 
      users ON posts."userId" = users.id 
       WHERE hashtag = $1`,
      [hashtag]
    );

    res.status(200).send(getPost.rows);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}
