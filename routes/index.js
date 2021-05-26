const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
var sql = require("mssql");

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (username) => {
  return jwt.sign({username}, TOKEN_SECRET);
};

router.get("/HomePage", function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  const { user, password } = req.query;
  //Check the pwd in the server
    // config for your database
    var config = {
        user: 'MBYDOMAIN/211979976',
        password: '',
        server: 'srv2\pupils', 
        database: 'furniture',
        options: {
          port: //////// ask elkarif
        } 
    };
    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();  
        // query to the database and get the records
        request.query('select * from USER', function (err, res) {   
            if (err) console.log(err)
            console.log(recordset);
            
          });

  const token = generateAccessToken(user);
  console.log("token2", token);
  return res.json({ token }).send();
});
});

router.post("/signup", function (req, res) {
  const { user, password } = req.body;
});

module.exports = router;
