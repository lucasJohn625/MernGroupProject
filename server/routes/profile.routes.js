const ProfileController=require('../controllers/profile.controller')

module.exports=(app)=>{
    app.get('/api/profiles',ProfileController.getAllProfiles)
    app.post('/api/profiles/new', ProfileController.createProfile)
    app.get('/api/profiles/:id', ProfileController.singleProfile)
    app.put('/api/profiles/:id', ProfileController.updateProfile)
    app.delete('/api/profiles/:id', ProfileController.deleteProfile)
}
