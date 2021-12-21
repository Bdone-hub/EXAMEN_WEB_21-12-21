let express = require('express');
let router = express.Router();

let AppartementController = require('./controller/AppartementController');

var mysql = require("mysql");

var connection = mysql.createConnection({          //connection à la DB
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'rooms'
});

router.get('/',AppartementController.Pieces);

router.post('/',AppartementController.AddPiece);


module.exports = router;