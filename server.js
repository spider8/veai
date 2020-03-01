const express = require('express');
const mongoose = require('mongoose');

const SERVER = 'mongodb:27017'; 

const MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME || "admin";
const MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD || "admin";
const MONGO_INITDB_DATABASE = process.env.MONGO_INITDB_DATABASE || "admin";

const MONGO_HOST = MONGO_INITDB_ROOT_USERNAME+":"+MONGO_INITDB_ROOT_PASSWORD;
mongoose.connect(`mongodb://${MONGO_HOST}@${SERVER}/${MONGO_INITDB_DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(_ => console.log("Connection with mongodb: OK"))
  .catch(error => console.log("Error to connect with mongodb!", error))

const Schema = mongoose.Schema;

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

var movieSchema = new Schema({
  name: { type: String, required: true },
  year: Number,
}, { collection: 'movies' });

const Movie = mongoose.model('Movie', movieSchema);

var count = 0;

// App
const app = express();
app.get('/', (req, res) => {
  try {
    const myMovie = new Movie({name: "name" + count, year: count});
    myMovie.save()
      .then(data => console.log({data}))
      .catch(error => console.log({error}))
    count++;
    res.send(JSON.stringify(myMovie));
  } catch (error) {
    res.send(JSON.stringify(error))
  }
});

app.get('/all', async (req, res) =>{ 
  try {
    const movies = await Movie.find();
    res.send(JSON.stringify(movies))
  } catch (error) {
    res.send(JSON.stringify(error))
  }
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);