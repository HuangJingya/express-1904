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

//定义帖子相关的路由
router.get('/', index)

router.post('/', create)

router.put('/:id', update)

router.delete("/:id", remove)
//暴露
module.exports = router