const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/movies')

const MovieSchema = {
  title: String,
  yearOfRelease: Number
}

const Movie = mongoose.model(MovieSchema)

module.exports = Movie