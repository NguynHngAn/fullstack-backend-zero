const express = require('express')
const router = express.Router();
const {getHomepage, getabc, gethongan, postCreateUser} = require('../controllers/homeController')

router.get('/', getHomepage)
  
router.get('/abc', getabc)
  
router.get('/hongan', gethongan)

router.post('/create-user', postCreateUser)

module.exports = router;