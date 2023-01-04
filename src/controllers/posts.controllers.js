
export async function deletePost(req, res) {
    const { id } = req.params
   try {
    const post = await connection.query("SELECT * FROM posts WHERE id = $1",[id] )

    if(post.rows.length == 0){
        res.sendStatus(401)
        return
    }
     
    await connection.query("DELETE FROM posts WHERE posts.id = $1", [id])
    res.sendStatus(204)

   } catch (err){
    console.log(err)
    res.sendStatus(500)
   }
    
}