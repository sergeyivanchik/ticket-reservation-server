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
    }).select(req.query.select || '');
});

router.get("/:id", function(req, res){
    cinemaModel.findById(req.params.id, function(err, cinema){
      if(err) return console.log(err);
      res.json(cinema);
    }).select(req.query.select || '');
});

router.get("/:id/:hall", function(req, res){
  cinemaModel.findOne(req.params.id, function(err, cinema){
    if(err) return console.log(err);
    res.json(cinema.halls[parseInt(req.params.hall)]);
  });
});

//Добавление зала
router.put("/insert/:id", function(req, res){
  if(!req.body) return res.sendStatus(400)
  cinemaModel.findByIdAndUpdate(req.params.id,{$push :{halls:req.body}}, { upsert: true }, function (err, hall) {
    if(err) return console.log(err);
    res.json(hall);
  });
});

module.exports = router;