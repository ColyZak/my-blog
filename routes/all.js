const express = require('express')
const Article = require('../models/article')
const router = express.Router()


router.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('all', { articles: articles })
  })
module.exports = router