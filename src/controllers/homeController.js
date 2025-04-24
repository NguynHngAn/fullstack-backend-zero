

const getHomepage = (req, res) => {
    res.send('Learn Nodejs with HoidanIT and Ankk')
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