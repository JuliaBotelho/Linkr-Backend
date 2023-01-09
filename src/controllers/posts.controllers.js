import { connection } from "../database/server.js";
import getMetaData from "metadata-scraper";

export async function deletePost(req, res) {
   const { id } = req.params
   try {
      const post = await connection.query(`SELECT * FROM posts WHERE id = $1`, [id])
      console.log(post)

      if (post.rows.length == 0) {
         res.sendStatus(404)
         return
      }

      if (post.rows[0].userId == res.locals.userId) {
         await connection.query("DELETE FROM posts WHERE id = $1", [id])
         res.status(204).send("Post excluido com sucesso")
         return
      } else {
         res.status(401).send("Esse usuário não é permitido")
         return
      }

   } catch (err) {
      console.log(err)
      res.sendStatus(500)
   }

}

export async function updatePost(req, res) {
   const { id } = req.params
   const { description } = req.body
   try {
      const post = await connection.query(`SELECT * FROM posts WHERE id = $1`, [id])
      console.log(post)

      if (post.rows.length == 0) {
         res.sendStatus(404)
         return
      }

      if (post.rows[0].userId == res.locals.userId) {
         await connection.query(`UPDATE posts SET description = $1  WHERE id = $2`, [description, id])
         res.sendStatus(201)
      } else {
         res.status(401).send("Esse usuário não é permitido")
      }

   } catch (err) {
      console.log(err)
      res.sendStatus(500)
   }

   return
}

export async function createPost(req, res) {
   const userid = res.locals.userId;
   const post = req.body;

   const metadata = await getMetaData(post.link);

   try {
      await connection.query(`INSERT INTO posts("userId", description, link,title, preview, pic) VALUES ($1,$2,$3,$4,$5,$6);`, [userid, post.text, post.link, metadata?.title, metadata?.description, metadata?.image || metadata?.icon]);

      res.sendStatus(201);
   } catch (error) {
      console.log(error);
      return res.status(500).send(error.message);
   }
}

export async function timelinePosts(req, res) {
   const postData = []

   try {
      const latestPosts = await connection.query(`SELECT users."userName" AS name, users.picture, posts.id ,posts.description AS text, posts.link, posts.title, posts.preview, posts.pic FROM posts JOIN users on users.id = posts."userId" ORDER BY posts.id DESC LIMIT 20;`);

      res.send(latestPosts.rows).status(201)

   } catch (error) {
      return res.status(500).send(error.message);
   }
}


