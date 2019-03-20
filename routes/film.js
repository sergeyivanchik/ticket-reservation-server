const router = require('express').Router();
const filmModel = require("../models/film.js");

router.get("/", function(req, res){      
  filmModel.find({}, function(err, films){
      if(err) return console.log(err);
      res.send(films)
  });
});
router.post("/", async function (req, res) {
        
  if(!req.body) return res.sendStatus(400);
  const film = await filmModel.create(req.body);
  res.json(film);
});
router.get("/:id", function(req, res){
  const id = req.params.id;
  filmModel.findOne({_id: id}, function(err, film){
      if(err) return console.log(err);
      res.send(film);
  });
});

module.exports = router;