const fs = require('fs');

const File = require('../models/file');
const randomString = require('../utils/randomString');

exports.getIndex = (req, res, next) => {
  res.render('index');
}

exports.postData = (req, res, next) => {
  const upload = req.file;
  console.log(upload);

  const file = new File({
    name: upload.originalname,
    size: upload.size,
    mimetype: upload.mimetype,
    data: upload.buffer,
    slug: randomString(20)
  })
  file.save()
    .then(result => {
      res.render('success', {name: file.name});
    })
    .catch(err => console.log(err));
}

exports.getFile = (req, res, nxext) => {
  const getSlug = req.params.slug;
  File.findOne({slug: getSlug})
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
}