//帖子的控制器，暴露一系列中间件的方法给到帖子的路由去使用

//引入PostModel
const PostModel = require('../modules/postModel')
/**
 * 查询帖子
 */
exports.index = async (req, res) => {

    const data = await PostModel.find();
    res.send({
        code: 0,
        msg: '成功',
        data: data
    })
}
/**
 * 创建帖子
 */
exports.create = async (req, res) => {
    const {
        title,
        content
    } = req.body;

    // PostModel.create({
    //         title,
    //         content
    //     }).then(() => {
    //         res.send({
    //             code: 0,
    //             msg: '成功'
    //         })

    //     })
    //     .catch(error => {
    //         console.log(error);
    //         res.send({
    //             code: 0,
    //             msg: "失败"
    //         });
    //     });

    await PostModel.create({
        title,
        content
    });
    res.send({
        code: 0,
        msg: "成功"
    });
};

/**
 * 更新帖子
 */
exports.update = async (req, res) => {
    //接受前端传递过来的参数
    const id = req.params.id;
    //更新的内容req.body
    // const {
    //     title,
    //     content
    // } = req.body;

    await PostModel.updateOne({
        _id: id
    }, req.body);
    res.send({
        code: 0,
        msg: "成功"
    });
};


//更新
// PostModel.updateOne({
//     _id: id
// }, {
//     title: title,
//     content: content
// });



/**
 * 删除帖子
 */
exports.remove = async (req, res) => {
    const id = req.params.id


    await PostModel.deleteOne({
        _id: id
    });
    res.send({
        code: 0,
        msg: "成功"
    });


}