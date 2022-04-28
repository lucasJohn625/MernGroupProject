const mongoose=require('mongoose')

const ProfileSchema=new mongoose.Schema({
    profileName:{
        type:String,
        required:[true,"please enter name"],
        minLength:[5,"Must enter your name!"]
    },
    description:{
        type:String,
        required:[true,"Must enter a title for the blog!"]
    },
    favFoods:{
        type:String,
        required:[true,"please enter fav food"],
        minLength:[3, "Blog must be between 3 and 200 characters"],
        maxLength:[200, "Blog must be between 3 and 200 characters"]

    },
    favRestaurants:{
        type:String,
        required:[true, "Please enter a date"]
    }
},{timestamps:true})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports =Profile