if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const port = 4000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from server')
})

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})