import { connection } from "../database/server.js";

export async function getComment(req, res){
    const { id } = req.params;
   
    try {
     const comments = await connection.query(`SELECT * FROM comments WHERE "postId" = $1`, [id])
     console.log(comments)
  
    } catch(err) {
     console.log(err)
     res.sendStatus(500)
    }
}

export async function createComment(req,res) {
    const { id } = req.params;
    const userId = res.locals.userId;
    const comment = req.body;
    try {
      const comments = await connection.query(`INSERT INTO comments ("postId", "userId", comment) VALUES ($1,$2,$3)`,[id, userId, comment])
      console.log(comments)
   
    } catch(err) {
      console.log(err)
     res.sendStatus(500)
    }
}