const express = require('express')
const app = express()
let mongoose = require('mongoose');
const port = 3000
const routesUrls = require('./routes/index');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/crudapis', routesUrls);

mongoose.connect("mongodb+srv://vignesh:pass123@nameone.txmbkjg.mongodb.net/?retryWrites=true&w=majority&appName=NameOne", {
  useNewUrlParser: true,
});

let db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to mongoDB');
});
db.on('error', (error) => {
  console.log(error)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})