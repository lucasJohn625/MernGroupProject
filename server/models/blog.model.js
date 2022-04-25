const mongoose=require('mongoose')

const BlogSchema=new mongoose.Schema({
    blogAuthor:{
        type:String,
        minLength:[5,"Must enter your name!"]
    },
    blogTitle:{
        type:String,
        required:[true,"Must enter a title for the blog!"]
    },
    text:{
        type:String,
        minLength:[3, "Blog must be between 3 and 200 characters"],
        maxLength:[200, "Blog must be between 3 and 200 characters"]

    },
    date:{
        type:String,
        required:[true, "Please enter a date"]
    }
},{timestamps:true})

const Blog =mongoose.model('Blog', BlogSchema)

module.exports =Blog