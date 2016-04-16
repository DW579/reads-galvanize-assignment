var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
function Authors() {
  return knex('authors');
}

function verifyUser(req, res, next) {
  if (req.params.user.toString() === 'admin') {
    next();
  }
  else {
    res.redirect('/');
  }
};

router.get('/authors', function(req, res, next) {
  var a = Authors();
  var b = knex('books').innerJoin('authorbook', 'books.id', 'authorbook.books_id');
  Promise.all([a, b]).then(function(data) {
    for(var i = 0; i < data[0].length; i++) {
      data[0][i].book = [];
      for(var j = 0; j < data[1].length; j++) {
        if(data[0][i].id === data[1][j].authors_id) {
          data[0][i].book.push({title: data[1][j].title, id: data[1][j].books_id});
        }
      }
    }
    res.render('authors/index', {allAuthors: data[0]});
  });
});

router.get('/authors/:user/new', verifyUser, function(req, res, next) {
  res.render('authors/new', {username: req.params.user});
});

router.post('/authors', function(req, res, next) {
  Authors().insert({ first_name: req.body.first_name, last_name: req.body.last_name, url: req.body.url, bio: req.body.bio }).then(function () {
    res.redirect('/authors');
  });
});

router.get('/authors/:id', function(req, res, next) {
  Authors().where({id: req.params.id}).first().then(function (record) {
    res.render('authors/show', {theAuthor: record});
  });
});

router.get('/authors/:id/:user/edit', verifyUser, function(req, res, next) {
  Authors().where({id: req.params.id}).first().then(function (record) {
    res.render('authors/edit', {theAuthor: record, username: req.params.user});
  });
});

router.put('/authors/:id/update', function(req, res, next) {
  Authors().where({id: req.params.id}).update({ first_name: req.body.first_name, last_name: req.body.last_name, url: req.body.url, bio: req.body.bio }).then(function () {
    res.redirect('/authors');
  });
});

router.get('/authors/:id/:user/delete', verifyUser, function(req, res, next) {
  Authors().where({id: req.params.id}).first().then(function (record) {
    res.render('authors/delete', {theAuthor: record, username: req.params.user});
  });
});

router.delete('/authors/:id/delete', function(req, res, next) {
  Authors().where({id: req.params.id}).del().then(function () {
    res.redirect('/authors');
  });
});

module.exports = router;
