const Sequelize = require('sequelize')
const models = require('../models')

const {Posts} = require('../models')

exports.savePost = (req,res)=>{
    const post = {
        title:  req.body.title,
        content:  req.body.content,
        imageUrl:  req.body.image_url,
        categoryId:  req.body.category_id,
        userId:  1
    }

    Posts.create(post).then(result =>{
        res.status(200).json({
            message: "Post Created Successfully!",
            post: result
        })
    }).catch(error=>{
        res.status(400).json({
            message: "Unable to Create Post!",
            error: error
        })
    })
}

exports.index = (req,res)=>{
    res.send("THis is from web route!")
}