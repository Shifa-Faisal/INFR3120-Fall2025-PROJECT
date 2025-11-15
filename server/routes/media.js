let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Media = require('../models/media');

// get --> Extract & read something
// post --> post something
// put --> Edit/Update some data
// delete --> Delete the data
// CRUD --> Create, Read, Update & Delete

// Get route for the media list - Read Operation
router.get('/',async(req,res,next)=>{
    try
    {
        const mediaList = await Media.find();
        //console.log(MediaList);
        res.render('Media/list',{
            title:'Media',
            mediaList: mediaList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Media/list',{
            title:'Media',
            error:'Error on server'
        })
    }
})

// Get route for displaying the Add Page - Create Operation
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Media/add',{
            title:'Add a Media'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Media/add',{
            title:'Error',
            error:'Error on server'
        })
    }
})
// Post route for processing the Add Page - Create Operation
router.post('/add',async(req,res,next)=>{
    try
    {
        let newMedia = Media({
            "Media Type":req.body.type,
            "Name":req.body.name,
            "Description":req.body.description,
            "Rating (out of 5 stars) ": req.body.rating,
            "Review":req.body.review
        });
        Media.create(newMedia).then(()=>{
            res.redirect('/media')
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Media/add',{
            error:'Error on server'
        })
    }
})
// Get route for displaying the Edit Page - Update Operation
router.get('/edit/:id',async(req,res,next)=>{
    try
    { 
        const id = req.params.id;
        const mediatoEdit = await Media.findById(id);
        res.render('Media/edit', 
            { 
                title: 'Edit Media Review',
                media: mediatoEdit
            }
);

    }

    catch(err)
    {
        console.log(err);
        next(err);
    }

})

// Post route for processing the Edit Page - Update Operation
router.post('/edit/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        let updateMedia = {
            "_id": id,
            "Media Type": req.body.type,      
            "Name": req.body.name,
            "Description": req.body.description,
            "Rating (out of 5 stars) ": req.body.rating,
            "Review": req.body.review
        };
        Media.findByIdAndUpdate(id, updateMedia); 
        res.redirect('/media');
    } 
    catch(err) {
        console.log(err);
        next(err);
    }
});



// Get route for performing delete operation - Delete Operation
router.get('/delete/:id',async(req,res,next)=>{
    try
    {
        const id = req.params.id;
        Media.deleteOne({_id:id}).then(()=>{
            res.redirect('/media')
        })  
    }

})
module.exports = router;