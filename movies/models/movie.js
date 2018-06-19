const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/movies')

const MovieSchema = Schema({
  title: String,
  yearOfRelease: Number
})

const Movie = mongoose.model(MovieSchema)

module.exports = Movie