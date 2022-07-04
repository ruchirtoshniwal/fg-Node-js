var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact-us', { title: 'Contact-Us' });
});
router.post('/contact-us', function(req, res, next) {
  var f_name = req.body.f_name;
  var l_name = req.body.l_name;
  var email = req.body.email;
  var message = req.body.message;
  var sql = `INSERT INTO contacts (f_name, l_name, email, message, created_at) VALUES ("${f_name}", "${l_name}", "${email}", "${message}", NOW())`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});
module.exports = router;