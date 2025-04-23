const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Learn Nodejs with HoidanIT')
  })
  
router.get('/abc', (req, res) => {
    res.send('Check ABC')
  })
  
router.get('/hongan', (req, res) => {
    res.render('sample.ejs')
  })

module.exports = router;