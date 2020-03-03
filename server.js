const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
var cors = require('cors')

const axios = require('axios');

const { Client } = require('@elastic/elasticsearch')
const esClient = new Client({ node: 'http://es:9200' })

const SERVER = 'mongodb:27017';


mongoose.connect(`mongodb://${SERVER}/movie`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(_ => console.log("Connection with mongodb: OK"))
  .catch(error => console.log("Error to connect with mongodb!", error))

const Schema = mongoose.Schema;

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

function createApiUrl(name, year) {
  const TMDB_BASE = "https://api.themoviedb.org/3/search/movie?"
  const TMDB_KEY = "008632f4207ede7628503077ba6b93f5"
  const TMDB_LANGUAGE = "pt-BR"

  var url = `${TMDB_BASE}api_key=${TMDB_KEY}&language=${TMDB_LANGUAGE}&query=${name}&page=1&include_adult=true`
  if (year) url += `&year=${year}`
  return url
}

var movieSchema = new Schema({
  name: { type: String, required: true },
  year: { type: String, required: true },
  overview: { type: String, required: true },
  _id: { type: Number, required: true }
});

const Movie = mongoose.model('Movie', movieSchema);

// App
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/movie', async (req, res) => {
  const { search } = req.query;

  try {
    const { body } = await esClient.search({
      index: 'movies',
      body: {
        query: {
          multi_match: {
            query: `.*${search}.*`,
            fields: ["title", "overview"]
          }

        }
      }
    })

    res.send(body.hits.hits.map(movie => movie._source));

  } catch (error) {
    res.status(404);
    res.send("Not found");
  }
})

app.post('/movie', async (req, res) => {
  const { name, year } = req.query;

  if (!name) {
    res.status(422)
    res.send("Required name param")
  }

  const URL_API = createApiUrl(name, year);

  try {
    const result = await axios.get(URL_API);
    const data = result.data.results.shift()

    if (await Movie.findById(data.id)) {
      return res.status(409).send("Movie already indexed")
    }

    const myMovie = new Movie({ name: data.title, year: data.release_date, overview: data.overview, _id: data.id });
    await myMovie.save()
    await esClient.index({
      index: 'movies',
      body: data
    })
    res.send(data);
  } catch (error) {
    res.status(401)
    res.send(error);
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);