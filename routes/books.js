var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
function Books() {
  return knex('books');
}

function verifyUser(req, res, next) {
  if (req.params.user.toString() === 'admin') {
    next();
  }
  else {
    res.redirect('/');
  }
};

router.get('/books', function(req, res, next) {
  var a = Books();
  var b = knex('authors').innerJoin('authorbook', 'authors.id', 'authorbook.authors_id');
  Promise.all([a, b]).then(function(data) {
    for(var i = 0; i < data[0].length; i++) {
      data[0][i].author = [];
      for(var j = 0; j < data[1].length; j++) {
        if(data[0][i].id === data[1][j].books_id) {
          data[0][i].author.push({name: data[1][j].first_name + ' ' + data[1][j].last_name, id: data[1][j].authors_id});
        }
      }
    }
    res.render('books/index', {allBooks: data[0]});
  });
});

router.get('/books/:user/new', verifyUser, function(req, res, next) {
  res.render('books/new', {username: req.params.user});
});

router.post('/books', function(req, res, next) {
  Books().insert({ title: req.body.books_title, genre: req.body.books_genre, url: req.body.books_url, description: req.body.books_description }).then(function () {
    res.redirect('/books');
  });
});

router.get('/books/:id', function(req, res, next) {
  Books().where({id: req.params.id}).first().then(function (record) {
    res.render('books/show', {theBook: record});
  });
});

router.get('/books/:id/:user/edit', verifyUser, function(req, res, next) {
  Books().where({id: req.params.id}).first().then(function (record) {
    res.render('books/edit', {theBook: record, username: req.params.user});
  });
});

router.put('/books/:id/update', function(req, res, next) {
  Books().where({id: req.params.id}).update({ title: req.body.books_title, genre: req.body.books_genre, url: req.body.books_url, description: req.body.books_description }).then(function () {
    res.redirect('/books');
  });
});

router.get('/books/:id/:user/delete', verifyUser, function(req, res, next) {
  Books().where({id: req.params.id}).first().then(function (record) {
    res.render('books/delete', {theBook: record, username: req.params.user});
  });
});

router.delete('/books/:id/delete', function(req, res, next) {
  Books().where({id: req.params.id}).del().then(function () {
    res.redirect('/books');
  });
});

module.exports = router;
