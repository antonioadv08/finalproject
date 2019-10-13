
require("dotenv").config();

const multer = require('multer')
const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Book = require("../models/Stocks");
const upload = require("./../config/cloudinary.config");
const access = require("./../middlewares/access.mid");



router.get('/profile', (req, res) => {
  User.findById(req.user._id)
    .populate("stocks")
    .then(user => {
      user.stocks.reverse()
      res.render('profile-detail', { user })

    })

})




router.get('/resena', access.checkLogin, (req, res) => {

  const user = req.user;

  res.render('resena', { user })

})


router.post("/resena", upload.single("picName"), access.checkLogin, (req, res, next) => {
  const { title, author, pages, publisher_date, content } = req.body;
  const cover = req.file.url.toString();
  const categories = {name: req.body.categories}
  const newBook = new Book({
    creatorId: req.user._id,
    title,
    author,
    pages,
    publisher_date,
    categories,
    content,
    cover,

  });

  newBook.save()

    .then((book) => {
      User.findByIdAndUpdate(req.user._id, { $push: { books: book._id } }, { new: true })
        .then((user) => {
          res.redirect("/")

        })
    })
})




module.exports = router;