"use strict"

const user = {
    fname: "",
    lname: "",
    age: 0,
    ninja: function(newfname, newlname, newage){
        console.log(`First Name : ${newfname}; Last Name: ${newlname}; age: ${newage} `);
    }
}

user.ninja("Naruto", "Uzumaki", 37);