let Piece = require('../model/pieceModel')
const { name } = require("ejs");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'rooms'
});

exports.Pieces = function(req,res){
        res.render('pieces.ejs'); }

exports.AddPiece = function(req,res){
    namee =req.body.piece;
    length=req.body.Longueur;
    width=req.body.Largeur;
    //let piece = New Piece (namee,length,width);
    let id=2
    id+=1

    
        
    connection.query("select * from rooms;",function(error,result){
        if (error) console.log(error);
        console.log(result[1]);

        res.render('appartement.ejs',{result:result,result_lenght:result.length}); 
    
    })
    

}


