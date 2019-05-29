const router = require('express').Router();
const userModel = require("../models/user.js");

router.get("/", function(req, res){ 
    userModel.find({}, function(err, users){
      if(err) return console.log(err);
      res.json(users)
    });
});

router.post("/", async function (req, res) {     
    if(!req.body) return res.sendStatus(400);
    const user = await userModel.create(req.body);
    res.json(user);
});


module.exports = router;