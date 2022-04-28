const Profile = require('../models/profile.model')

module.exports ={
    createProfile:(req, res)=>{
        Profile.create(req.body)
        .then((newProfile)=>{
            console.log(newProfile)
            res.json(newProfile)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    getAllProfiles:(req, res)=>{
        Profile.find()
        .then((Profiles)=>{
            console.log(Profiles)
            res.json(Profiles)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    singleProfile:(req, res)=>{
        Profile.findOne({_id:req.params.id})
        .then((profile)=>{
            console.log(profile)
            res.json(profile)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    updateProfile:(req, res)=>{
        Profile.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then((updatedProfile)=>{
            console.log(updatedProfile)
            res.json(updatedProfile)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    deleteProfile:(req,res)=>{
        Profile.deleteOne({_id:req.params.id})
        .then((deletedProfile)=>{
            console.log(deletedProfile)
            res.json(deletedProfile)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    }
}