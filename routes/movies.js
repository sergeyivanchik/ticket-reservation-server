const router = require('express').Router();
const filmModel = require("../models/film.js");

router.get("/", function(req, res){    
  filmModel.find({}, function(err, films){
    if(err) return console.log(err);
    res.json(films);
  })
});

router.get("/:id", function(req, res){
  filmModel.findById(req.params.id, function(err, film){
    if(err) return console.log(err);
    res.json(film);
  });
});

router.post("/", async function (req, res) {     
  if(!req.body) return res.sendStatus(400);
  const film = await filmModel.create(req.body);
  res.json(film);
});

router.delete("/:id", function(req, res){ 
  filmModel.findByIdAndDelete( req.params.id, function(err, film){
    if(err) return console.log(err);
    res.json(film);
  });
});

router.put("/:id", function(req, res){
  if(!req.body) return res.sendStatus(400)
  filmModel.findByIdAndUpdate(req.params.id, req.body, { upsert: true }, function (err, film) {
    if(err) return console.log(err);
    res.json(film);
  });
}); 

module.exports = router;