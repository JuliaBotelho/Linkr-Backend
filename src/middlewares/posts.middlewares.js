import { connection } from "../database/server.js";
import { postSchema } from "../Schemas/post.schema.js"

export async function postValidation(req, res, next) {
    const post = req.body;

    const { error } = postSchema.validate(post, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();
}

export async function gatherPost(req, res, next){
    const  postId  = req.params;
    const userid = res.locals.userId;

    try{
        const repostedPost = await connection.query(`SELECT * FROM posts WHERE id = $1;`,[Number(postId.id)]);
        res.locals.repostedInfo = repostedPost.rows[0];

        const reposterId = await connection.query(`SELECT "userName" FROM users WHERE id = $1;`,[userid]);
        res.locals.reposterName = reposterId.rows[0];
        
    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }

    next();
}
