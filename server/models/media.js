let mongoose = require("mongoose");

// Create a model

let mediaModel = mongoose.Schema(
    {
    "Media Type": String,
    "Name": String,
    "Description": String,
    "Rating (out of 5 stars)": Number, 
    "Review": String
    },
    {
        collection:"Media"
    }
);

module.exports=mongoose.model('Media',mediaModel);