const connection = require('../config/database');

const getHomepage = (req, res) => {
    let users = [];
    connection.query(
        'select * from Users u',
        function(err, results, fields) {
            users = results;
          console.log(">>> results: ", results); // results contains rows returned by server
          console.log(">> check user: ", users);
          res.send(JSON.stringify(users));
        }
      );
}

const getabc = (req, res) => {
    res.send('Check ABC')
}

const gethongan = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getabc,
    gethongan
}