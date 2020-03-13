var mongoose = require('mongoose');

// Genre Schema
var genreSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    create_date: {
        type:Date,
        default:Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);

// get genres
module.exports.getGenres = (callback,limit) => {
    Genre.find(callback).limit(limit);

}

// add genres
module.exports.addGenre = (genre,callback) => {
    Genre.create(genre,callback);
}

// update genres
module.exports.updateGenre = (id,genre,options,callback) => {
    var query = {_id:id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete genres
module.exports.removeGenre = (id,callback) => {
    var query = {_id:id};
    Genre.remove(query,callback);
}
