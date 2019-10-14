
require("dotenv").config();

const multer = require('multer')
const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Book = require("../models/Stocks");
const upload = require("./../config/cloudinary.config");
const access = require("./../middlewares/access.mid");



// router.get('/profile', (req, res) => {
//   User.findById(req.user._id)
//     .populate("stocks")
//     .then(user => {
//       user.stocks.reverse()
//       res.render('profile-detail', { user })

//     })

// })




// router.get('/resena', access.checkLogin, (req, res) => {

//   const user = req.user;

//   res.render('resena', { user })

// })


router.post("/stockadvice", upload.single("picName"), access.checkLogin, (req, res, next) => {
  const { ticker,nameCompany,recomendation } = req.body;
  const charturl = req.file.url.toString();
  const newStock = new Stock({
    creatorId: req.user._id,
    ticker,
    nameCompany,
    recomendation,
    charturl,
  });

  newStock.save()

    .then((stock) => {
      User.findByIdAndUpdate(req.user._id, { $push: { stocks: stock._id } }, { new: true })
        .then((user) => {
          res.redirect("/")

        })
    })
})




module.exports = router;