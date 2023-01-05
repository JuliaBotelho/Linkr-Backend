import { connection } from "../database/server.js";

export async function deletePost(req, res) {
    const { id } = req.params
   try {
     const post = await connection.query(`SELECT * FROM posts WHERE id = $1`,[id] )
     console.log(post)

    if(post.rows.length == 0){
        res.sendStatus(404)
        return
    }

    if(post.rows[0].userId == res.locals.userId) {
        await connection.query("DELETE FROM posts WHERE id = $1", [id])
        res.status(204).send("Post excluido com sucesso")
        return
     } else {
        res.status(401).send("Esse usuário não é permitido")
        return
     }
     
    } catch (err){
      console.log(err)
      res.sendStatus(500)
   }
    
}