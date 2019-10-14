const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: 'User' },

  chart: {
    url: String,
    originalname: String
  },
  stockTicker:String,
  stockName: String,
  author: String,
  content: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],

})
const Stocks = mongoose.model('Stock', stockSchema);
module.exports = Stocks;