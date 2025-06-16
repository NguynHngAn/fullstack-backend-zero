const express = require('express')
const router = express.Router();
const {getHomepage, getabc, gethongan} = require('../controllers/homeController')

router.get('/', getHomepage)
  
router.get('/abc', getabc)
  
router.get('/hongan', gethongan)

module.exports = router;