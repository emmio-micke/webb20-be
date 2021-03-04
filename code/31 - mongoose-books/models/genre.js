const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    }
})

GenreSchema
    .virtual('url')
    .get(() => {
        return `/catalog/genre/${this._id}`
    })

module.exports = mongoose.model('Genre', GenreSchema)
