const router = require('express').Router();
const filmModel = require("../models/film.js");

// функциональный стиль + async/await на промисах
router.get("/", async (req, res) => { 
  try {
    const films = await filmModel.find({}).sort({_id:-1}).limit(6)
    /**
     * В REST API лучше возращать объекты, которые описывают ответ, а не их значения, чтобы на клиенте было проще.
     * Это вроде не стандарт и нигде о таком не написано, но вроде реально проще
     */
    return res.json({ films })
  } catch (error) {
    return res.json({
      error: error.message
    })
  }
});

module.exports = router;