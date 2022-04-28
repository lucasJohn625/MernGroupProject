const Blog = require('../models/blog.model')

module.exports ={
    createBlog:(req, res)=>{
        Blog.create(req.body)
        .then((newBlog)=>{
            console.log(newBlog)
            res.json(newBlog)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    getAllBlogs:(req, res)=>{
        Blog.find()
        .then((blogs)=>{
            console.log(blogs)
            res.json(blogs)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    singleBlog:(req, res)=>{
        Blog.findOne({_id:req.params.id})
        .then((blog)=>{
            console.log(blog)
            res.json(blog)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    updateBlog:(req, res)=>{
        Blog.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then((updatedBlog)=>{
            console.log(updatedBlog)
            res.json(updatedBlog)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    deleteBlog:(req,res)=>{
        Blog.deleteOne({_id:req.params.id})
        .then((deletedBlog)=>{
            console.log(deletedBlog)
            res.json(deletedBlog)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    }
}