const router = require('express').Router();
const seanseModel = require("../models/session.js");

router.post("/", async function (req, res) {     
    if(!req.body) return res.sendStatus(400);
    const seanse = await seanseModel.create(req.body);
    res.json(seanse);
});
//добавление сидения
router.put("/insert/:id", function(req, res){
  if(!req.body) return res.sendStatus(400)
  seanseModel.findByIdAndUpdate(req.params.id,{$push :{selectedSeats: {
    row: req.body.row,
    seat: req.body.seat,
    price: req.body.price
  }}}, function (err, seanse) {
    if(err) return console.log(err);
    res.json(seanse);
  });
});

router.get("/", function(req, res){ 
  seanseModel.find({}, function(err, seanse){
    if(err) return console.log(err);
    res.json(seanse)
  }).sort({_id:-1});
});

router.get("/:movie", function(req, res){ 
  seanseModel.find({ movie: req.params.movie}, function(err, seanse){
    if(err) return console.log(err);
    res.json(seanse)
  });
});

router.get("/:id_seanse", function(req,res){
  seanseModel.findById(req.params.id_seanse,function(err, seanse) {
    if(err) return console.log(err);
    res.json(seanse)
  }).select(req.query.select || '')
}); 
//удаление сидения
router.put("/delete/:id", function(req, res){
  if(!req.body) return res.sendStatus(400)
  seanseModel.findByIdAndUpdate(req.params.id,{$pull :{selectedSeats:req.body}}, { upsert: true }, function (err, seanse) {
    if(err) return console.log(err);
    res.json(seanse);
  });
});
module.exports = router;  