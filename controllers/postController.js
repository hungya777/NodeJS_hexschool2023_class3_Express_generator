const successHandleService = require('../services/successHandleService');
const errorHandleService = require('../services/errorHandleService');
const Post = require('../models/postsModel');  //載入 PostModel

const PostController = {
    async getPosts(req, res) {
        const allPosts = await Post.find();
        successHandleService(res, allPosts);
    },
    async createPosts(req, res) {
        try{
            const { body } = req;
            if(body.content !== undefined){
                const newPost = await Post.create(
                    {
                        name: body.name,
                        content: body.content,
                        tags: body.tags,
                        type: body.type
                    }
                );
                successHandleService(res, newPost);
            }else{
                errorHandleService(res);
            }
        }catch(error){
            errorHandleService(res, 400, error);
        }
    },
    async deleteAllPosts(req, res) {
        const post = await Post.deleteMany({});
        successHandleService(res, post)
    },
    async deletePost(req, res) {
        try {         
            const id = req.params.postId;
            const post = await Post.findByIdAndDelete(id);
            console.log(post);
            if(post) {
                successHandleService(res, post);
            } else {
                errorHandleService(res);
            }
        } catch (err) {
            errorHandleService(res, 400, err);
        }
    },
    async updatePost(req, res) {
        try {
            const id = req.params.postId;
            const { body } = req;
            const post = await Post.findByIdAndUpdate(id, {
                name: body.name,
                content: body.content,
                tags: body.tags,
                type: body.type
            });
            successHandleService(res, post);
        } catch(error) {
            errorHandleService(res, 400 ,error);
        }
    }
}

module.exports = PostController;