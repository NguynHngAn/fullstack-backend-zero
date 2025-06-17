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

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log('>>> email: ', email, '; name = ', name, '; city = ', city);
    // let {email, name, city} = req.body;

    connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {

          console.log(results);

          res.send("Create user Successfully!");
        }
      );
}

module.exports = {
    getHomepage,
    getabc,
    gethongan,
    postCreateUser
}