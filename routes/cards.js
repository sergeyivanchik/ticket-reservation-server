const router = require('express').Router();
const filmModel = require("../models/film.js");

router.get("/", function(req, res){      
    filmModel.find({}, function(err, films){
      if(err) return console.log(err);
      res.json(films)
    }).sort({_id:-1}).limit(6);
  });

  module.exports = router;