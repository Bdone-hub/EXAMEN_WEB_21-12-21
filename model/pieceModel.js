const { name } = require("ejs");


class Piece{
    constructor(namee,length,width){
        this.name=name;
        this.length=length;
        this.width=width;
    }
    
    
    getName(){
        return this.name
    }
}

module.exports = Piece;