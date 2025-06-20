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

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log('>>> email: ', email, '; name = ', name, '; city = ', city);
    
      let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );

    console.log(">>> results: ", results)

    res.send('Create user success!');
}

const getData = (req, res) => {
    connection.query(
        `SELECT * FROM Users`,
        function (err, results) {
            console.log('>>> Users:', results);
            res.render('home.ejs', {users: results});
        }
    )
}

module.exports = {
    getHomepage,
    getabc,
    gethongan,
    getCreatePage,
    postCreateUser,
    getData
}