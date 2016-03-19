var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tinyurl');
var conn = mongoose.connection;
var Url = require('../models/url');

/* GET home page. */


router.post('/getTinyURL', function(req, res){
  var originalURL = req.body.originalURL;
  res.send(originalURL);
} );

router.get('/getOriginalURL', function(req, res){
    // var url = new Url();
    // url.originalURL = 'http://www.facebook.com';
    // url.tinyURL = 'aaab';

    var url = { originalURL : 'http://www.facebook.com' , tinyURL : 'aaab'};
    conn.collection('urlcollection').insert(url);
    /*url.save(function(err) {
      if (err)
        res.send(err);

    });*/
});

router.get('/url/', function(req, res, next) {
  res.redirect('http://www.google.com');
});

module.exports = router;
