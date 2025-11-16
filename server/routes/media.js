let express = require('express');
let router = express.Router();
let Media = require('../models/media');

// displays the add page
router.get('/add', (req, res) => {
    res.render('Media/add', { title: 'Add Review' });
});

// processing the actual form and data
router.post('/add', async (req, res) => {
    try {
        let newMedia = {
            "Media Type": req.body.type,
            "Name": req.body.name,
            "Description": req.body.description,
            "Rating (out of 5 stars)": req.body.rating,
            "Review": req.body.review
        };

        await Media.create(newMedia);
        res.redirect('/');   
    } catch (err) {
        console.error(err);
        res.render('Media/add', { error: 'Error on server' });
    }
});

// displays the EDIT page to edit the forms 
router.get('/edit/:id', async (req, res) => {
    try {
        //find the id for the item and pulls it up to edit then after editing sens user back home
        const media = await Media.findById(req.params.id);
        res.render('Media/edit', { title: 'Edit Media Review', media });
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});

// EDIT form processing which updates the edits
router.post('/edit/:id', async (req, res) => {
    try {
        await Media.findByIdAndUpdate(req.params.id, {
            "Media Type": req.body.type,
            "Name": req.body.name,
            "Description": req.body.description,
            "Rating (out of 5 stars)": req.body.rating,
            "Review": req.body.review
        });

        res.redirect('/');   
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});

// for deleting items
router.get('/delete/:id', async (req, res) => {
    try {
        //deletes a whole item then sends user back to home page
        await Media.deleteOne({ _id: req.params.id });
        res.redirect('/');   
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});

module.exports = router;