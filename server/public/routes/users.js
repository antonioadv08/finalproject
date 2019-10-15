
require("dotenv").config();

const multer = require('multer')
const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Book = require("../models/Stocks");
const upload = require("./../config/cloudinary.config");
const access = require("./../middlewares/access.mid");






module.exports = router;