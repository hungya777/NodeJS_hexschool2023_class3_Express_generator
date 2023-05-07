var express = require('express');
var router = express.Router();
const PostController = require('../controllers/postController');

/* Express 處理過後，req跟res都已包在函式內，這邊是傳一個函式，而非觸發函式 */
router.get('/', PostController.getPosts);
router.post('/', PostController.createPosts);
router.delete('/', PostController.deleteAllPosts);
router.delete('/:postId', PostController.deletePost);
router.patch('/:postId', PostController.updatePost);

module.exports = router;