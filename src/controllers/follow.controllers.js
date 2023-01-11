import { connection } from "../database/server.js";

export async function followUser(req, res) {
  const newFollowingId = parseInt(req.params.id);
  const userId = res.locals.userId;

  try {
    const following = await connection.query(
      `SELECT f."followId" FROM followers f WHERE "userId" = $1;`,
      [userId]
    );

    const followedUser = following.rows.filter((id) => id.followId == newFollowingId).length

    if (!followedUser) {
      await connection.query(
        `INSERT INTO followers ("userId", "followId")  VALUES ($1, $2);`,
        [userId, parseInt(newFollowingId)]
      );
      return res.sendStatus(200);
    }

    await connection.query(
      `DELETE FROM followers WHERE "userId" = $1 AND "followId" = $2;`,
      [userId, parseInt(newFollowingId)]
    );

    res.sendStatus(200);

  } catch (err) {
    res.status(500).send(err);
  }
}

export async function following(req, res) {
  const userId = res.locals.userId;

  try {
    const myFollowing = await connection.query(
      `SELECT f."followId" FROM followers f WHERE "userId" = $1;`,
      [userId]
    );

    // const followedUser = following.rows.filter((id) => id.followId == newFollowingId).length

    // if (!followedUser) {
    //   await connection.query(
    //     `INSERT INTO followers ("userId", "followId")  VALUES ($1, $2);`,
    //     [userId, parseInt(newFollowingId)]
    //   );
    //   console.log("entrei")
    //   return res.sendStatus(200);
    // }

    // await connection.query(
    //   `DELETE FROM followers WHERE "userId" = $1 AND "followId" = $2;`,
    //   [userId, parseInt(newFollowingId)]
    // );

    res.status(200).send(myFollowing.rows);

  } catch (err) {
    res.status(500).send(err);
  }
}
