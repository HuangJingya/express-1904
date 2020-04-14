//帖子模型

//引入MongoDB的 mongoose
const mongoose = require('../config/db')

//定义schema
const postSchema = new mongoose.Schema({
    //标题
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});


//创建模型
const PostModel = mongoose.model('post', postSchema);

module.exports = PostModel;