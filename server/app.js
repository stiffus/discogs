const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const adminRoutes = require('./routes/admin');
const discogsRouter = require('./routes/discogs');
const mongo = require('./routes/mongo');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src','views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')))

app.use('/admin', adminRoutes);
app.use(discogsRouter);
app.use(mongo);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../src','views', '404.html'));
});

mongoose.connect(keys.mongoURI, {useNewUrlParser: true}).then(result => {
  app.listen(3000, () => console.log('Listening on port 3000'))
}).catch(err => {
  console.log(err);
})
