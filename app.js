const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/fupload', {useNewUrlParser: true, useUnifiedTopology:true})
  .then(result => {
    console.log('connected!');
  })
  .catch(err => console.log(err));

const userRoutes = require('./routes/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(multer().single('uploadedFile'));

app.use('/', userRoutes);

app.listen(3000, ()=>{
  console.log('Server started at 3000!')
});