const router = require('express').Router();
const filmModel = require("../models/film.js");

router.get("/", function(req, res){ 
filmModel.countDocuments( function(err,count) {
  if(err) return console.log(err);
  if (count >=6) {
    filmModel.find({}, function(err, films){
      if(err) return console.log(err);
      res.json(films)
    })
  }
  else {
    res.json('GG');
  }});
});

module.exports = router;