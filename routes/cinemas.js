const router = require('express').Router();
const cinemaModel = require("../models/cinema.js");

router.post("/", async function (req, res) {     
    if(!req.body) return res.sendStatus(400);
    const cinema = await cinemaModel.create(req.body);
    res.json(cinema);
});

router.get("/", function(req, res){ 
    cinemaModel.find({}, function(err, cinemas){
      if(err) return console.log(err);
      res.json(cinemas)
    });
});

router.get("/:id", function(req, res){
    cinemaModel.findOne({_id: req.params.id}, function(err, cinema){
      if(err) return console.log(err);
      res.json(cinema);
    });
});

router.get("/:id/:hall_id", function(req, res){
  cinemaModel.findOne({_id: req.params.id}, function(err, cinema){
    if(err) return console.log(err);
    res.json(cinema.halls[parseInt(req.params.hall_id)]);
  });
    });

module.exports = router;