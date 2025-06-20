const express = require('express')
const router = express.Router();
const {getHomepage, getabc, gethongan, postCreateUser, getCreatePage, getData} = require('../controllers/homeController')

router.get('/', getHomepage)
  
router.get('/abc', getabc)
  
router.get('/hongan', gethongan)

router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser)

router.get('/getdata', getData)

module.exports = router;