//帖子路由文件

//引入express
const express = require("express")

const {
    index,
    create,
    update,
    remove
} = require('../controllers/postController');

const router = express.Router();


/**
 * @api {get} /posts 获取帖子的列表
 * @apiName index
 * @apiGroup Post
 *
 *
 * @apiSuccess {Number} code 错误状态码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Array} data 帖子的数组
 */
router.get('/', index)

/**
 * @api {post} http://localhost:3000/posts 创建一个帖子
 * @apiName create
 * @apiGroup Post
 *
 *@apiParam {String} title 帖子标题
 *@apiParam {String} content 帖子内容

 * @apiSuccess {Number} code 错误状态码
 * @apiSuccess {String} msg  错误信息
 */
router.post('/', create)

/**
 * @api {put} http://localhost:3000/posts  编辑一个帖子
 * @apiName update
 * @apiGroup Post
 *
 *@apiParam {String} title 帖子标题
 *@apiParam {String} content 帖子内容

 * @apiSuccess {Number} code 错误状态码
 * @apiSuccess {String} msg  错误信息
 */
router.put('/:id', update)


/**
 * @api {delete} http://localhost:3000/posts  删除一个帖子
 * @apiName remove
 * @apiGroup Post
 *
 *@apiParam {String} title 帖子标题
 *@apiParam {String} content 帖子内容

 * @apiSuccess {Number} code 错误状态码
 * @apiSuccess {String} msg  错误信息
 */
router.delete("/:id", remove)

/**
 * @api {get} http://localhost:3000/posts 帖子详情
 * @apiName remove
 * @apiGroup Post
 * 
 * 
 * @apiSuccess {Number} code 错误状态码
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Object} data  更新完成之后的帖子信息
 */

// router.get("/:id", show);
//暴露
module.exports = router;