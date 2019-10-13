 
const express = require('express');
const router = express.Router();
const Stocks = require("../models/Stocks");
const Comment = require("../models/Comments");
const access = require("./../middlewares/access.mid");

router.get('/', (req, res) => {
  Stocks.find()
    .select({
      chart: 1,
      stockName: 1,
      author: 1,
      content: 1
    })
    .then(allStocks => {
      allStocks.reverse();
      res.render('index', {allStocks, user: req.user})
    })
  })
router.get('/stocks/:id/', (req, res) => {
  const user = req.user
  Stocks.findById(req.params.id)
    
    .populate('comments')
    .populate({ path: 'comments', populate: { path: 'creatorId' } })
    .lean()
    .then(oneBook => {
     if(oneBook['comments']){
      oneBook['comments'] = oneBook.comments.reverse();
      res.render('stock-detail', {
        oneBook,
        user
      })
     }else{
      res.render('stock-detail', {
        oneBook,
        user
      })
     }
    })
})

router.post('/addComment/:bookId', access.checkLogin, (req, res) => {
  const {
    content
  } = req.body;
  const {
    bookId
  } = req.params;
  const newComment = new Comment({
    content,
    creatorId: req.user._id
  })

  newComment
    .save()
    .then((comment) => {
      Stocks.findByIdAndUpdate(bookId, {
          $push: {
            comments: comment._id
          }
        })
        .then(() => {
          res.redirect('back');
        })
        .catch((error) => {
          console.error(error);
        })
    })
})

module.exports = router;