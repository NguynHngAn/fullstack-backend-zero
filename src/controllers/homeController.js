const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getabc = (req, res) => {
    res.send('Check ABC')
}

const gethongan = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log('>>> req.body: ', req.body);
    res.send('Create a new User')
}

module.exports = {
    getHomepage,
    getabc,
    gethongan,
    postCreateUser
}