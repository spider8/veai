'use strict';

const express = require('express');
//const router = express.Router();  
const mongoose = require('mongoose');

const server = 'mongodb:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'movie';      // REPLACE WITH YOUR DB NAME

mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

db.on('error', error => console.log("AZEDOU", error));

db.once('open', function () {
  console.log('Conectado ao MongoDB.')
});

const Schema = mongoose.Schema;

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

var movieSchema = new Schema({
  name: { type: String, required: true },
  year: Number,
}, { collection: 'movies' });

const movie = mongoose.model('Movie', movieSchema);

// App
const app = express();
app.get('/', (req, res) => {
  res.send(JSON.stringify(movie));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);