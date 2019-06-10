const mongoose = require('mongoose');
BoughtSeat = mongoose.model('BoughtSeat');


async function addBoughtSeat(req, res) {
  const newBoughtSeat = await new BoughtSeat(req.body);
  newBoughtSeat.save()
    .then(boughtSeat => res.send(boughtSeat))
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};

module.exports = {
  addBoughtSeat
}
